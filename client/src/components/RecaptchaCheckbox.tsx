import { useEffect, useRef, useState } from 'react';

type RecaptchaApi = {
  render: (container: HTMLElement, options: Record<string, unknown>) => number;
  reset: (widgetId: number) => void;
};

declare global {
  interface Window {
    grecaptcha?: RecaptchaApi;
    diamondSalonRecaptchaLoaded?: () => void;
  }
}

const scriptId = 'diamond-salon-recaptcha-script';
let recaptchaLoader: Promise<RecaptchaApi> | undefined;

function loadRecaptcha(): Promise<RecaptchaApi> {
  if (window.grecaptcha) return Promise.resolve(window.grecaptcha);
  if (recaptchaLoader) return recaptchaLoader;

  recaptchaLoader = new Promise<RecaptchaApi>((resolve, reject) => {
    const finish = () => {
      if (window.grecaptcha) resolve(window.grecaptcha);
      else reject(new Error('The security verification did not initialize.'));
    };

    window.diamondSalonRecaptchaLoaded = finish;

    const existingScript = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (existingScript) {
      existingScript.addEventListener('load', finish, { once: true });
      existingScript.addEventListener('error', () => reject(new Error('The security verification could not load.')), { once: true });
      return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://www.google.com/recaptcha/api.js?onload=diamondSalonRecaptchaLoaded&render=explicit';
    script.async = true;
    script.defer = true;
    script.onerror = () => reject(new Error('The security verification could not load.'));
    document.head.append(script);
  });

  return recaptchaLoader;
}

type RecaptchaCheckboxProps = {
  siteKey: string;
  resetKey: number;
  onTokenChange: (token: string) => void;
};

export function RecaptchaCheckbox({ siteKey, resetKey, onTokenChange }: RecaptchaCheckboxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | undefined>(undefined);
  const previousResetKey = useRef(resetKey);
  const [state, setState] = useState<'loading' | 'ready' | 'error'>(siteKey ? 'loading' : 'error');
  const [message, setMessage] = useState(siteKey ? '' : 'Security verification is not configured. Please call or email the salon.');

  useEffect(() => {
    if (!siteKey || !containerRef.current) return;
    let active = true;

    loadRecaptcha()
      .then((recaptcha) => {
        if (!active || !containerRef.current || widgetIdRef.current !== undefined) return;
        widgetIdRef.current = recaptcha.render(containerRef.current, {
          sitekey: siteKey,
          theme: 'light',
          callback: (token: string) => {
            setState('ready');
            setMessage('');
            onTokenChange(token);
          },
          'expired-callback': () => {
            onTokenChange('');
            setState('error');
            setMessage('Your verification expired. Please check “I’m not a robot” again.');
          },
          'error-callback': () => {
            onTokenChange('');
            setState('error');
            setMessage('The security verification could not load. Please refresh the page and try again.');
          },
        });
        setState('ready');
      })
      .catch(() => {
        if (!active) return;
        onTokenChange('');
        setState('error');
        setMessage('The security verification could not load. Please refresh the page and try again.');
      });

    return () => {
      active = false;
    };
  }, [onTokenChange, siteKey]);

  useEffect(() => {
    if (previousResetKey.current === resetKey) return;
    previousResetKey.current = resetKey;
    if (widgetIdRef.current !== undefined && window.grecaptcha) {
      window.grecaptcha.reset(widgetIdRef.current);
    }
  }, [resetKey]);

  return (
    <div className="recaptcha-field">
      <div ref={containerRef} className="recaptcha-widget" aria-label="I’m not a robot verification" />
      {state === 'loading' ? <p className="recaptcha-message">Loading security verification…</p> : null}
      {message ? <p className="recaptcha-message recaptcha-message--error" role="alert">{message}</p> : null}
    </div>
  );
}

const apiBase = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');

export const hasSubmissionApi =
  import.meta.env.DEV ||
  Boolean(import.meta.env.VITE_API_URL) ||
  import.meta.env.VITE_ENABLE_SAME_ORIGIN_API === 'true';

type ApiErrorPayload = {
  error?: string;
};

export async function postJson<TPayload extends Record<string, unknown>>(
  path: string,
  payload: TPayload,
): Promise<void> {
  const response = await fetch(`${apiBase}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    let message = 'We could not send your request. Please try again.';
    try {
      const data = (await response.json()) as ApiErrorPayload;
      if (data.error) message = data.error;
    } catch {
      // Keep the friendly fallback message.
    }
    throw new Error(message);
  }
}

export function openEmailDraft(
  to: string,
  subject: string,
  fields: Array<[string, string]>,
): void {
  const body = fields
    .filter(([, value]) => value.trim())
    .map(([label, value]) => `${label}: ${value.trim()}`)
    .join('\n\n');
  window.location.assign(`mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
}

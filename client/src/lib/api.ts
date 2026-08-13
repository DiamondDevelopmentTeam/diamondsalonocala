const inquiryApiUrl = import.meta.env.VITE_INQUIRY_API_URL?.trim() || '';

export const hasSalonFormsApi = import.meta.env.DEV || import.meta.env.VITE_ENABLE_SAME_ORIGIN_API === 'true';
export const hasInquiryApi = Boolean(inquiryApiUrl);

type ApiErrorPayload = {
  error?: string | { message?: string };
  message?: string;
};

async function requestJson<TPayload extends Record<string, unknown>>(
  url: string,
  payload: TPayload,
): Promise<void> {
  let response: Response;

  try {
    response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(20_000),
    });
  } catch {
    throw new Error('We could not connect to the secure form service. Please check your connection and try again.');
  }

  if (response.ok) return;

  let data: ApiErrorPayload | null = null;
  try {
    data = (await response.json()) as ApiErrorPayload;
  } catch {
    // Keep the provider-neutral fallback below.
  }

  const serviceMessage = typeof data?.error === 'object' ? data.error.message : data?.error;
  if (response.status === 429) {
    throw new Error('Too many requests were sent. Please wait a few minutes and try again.');
  }
  throw new Error(serviceMessage || data?.message || 'We could not send your request. Please try again later.');
}

export async function postInquiry<TPayload extends Record<string, unknown>>(payload: TPayload): Promise<void> {
  if (!inquiryApiUrl) {
    throw new Error('Online form delivery is temporarily unavailable. Please contact the salon by phone or email.');
  }
  await requestJson(inquiryApiUrl, payload);
}

export async function postSalonForm<TPayload extends Record<string, unknown>>(payload: TPayload): Promise<void> {
  await requestJson('/api/forms', payload);
}

const apiBase = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');

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

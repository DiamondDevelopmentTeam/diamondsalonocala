import { config } from '../config.js';
import type { SubmissionType } from '../types.js';

function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export async function sendSubmissionEmail(
  type: SubmissionType,
  payload: Record<string, unknown>,
): Promise<void> {
  if (!config.resendApiKey) return;

  const rows = Object.entries(payload)
    .map(([key, value]) => `<tr><th style="text-align:left;padding:8px;border-bottom:1px solid #ddd">${escapeHtml(key)}</th><td style="padding:8px;border-bottom:1px solid #ddd">${escapeHtml(value)}</td></tr>`)
    .join('');

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${config.resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: config.fromEmail,
      to: [config.submissionToEmail],
      subject: `Diamond Salon website: ${type}`,
      html: `<h1>New ${escapeHtml(type)} submission</h1><table style="border-collapse:collapse">${rows}</table>`,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Email provider returned ${response.status}: ${body.slice(0, 300)}`);
  }
}

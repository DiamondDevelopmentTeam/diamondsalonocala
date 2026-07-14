import { createHash, randomUUID } from 'node:crypto';
import { Router, type Request } from 'express';
import { contactSchema, joinTeamSchema, salonFormSchema } from '../schemas.js';
import { sendSubmissionEmail } from '../services/email.js';
import { saveSubmission } from '../services/storage.js';
import type { SubmissionType } from '../types.js';

export const submissionsRouter = Router();

function hashIp(req: Request): string {
  const value = req.ip || req.socket.remoteAddress || 'unknown';
  return createHash('sha256').update(value).digest('hex').slice(0, 24);
}

async function persist(type: SubmissionType, req: Request, payload: Record<string, unknown>) {
  await saveSubmission({
    id: randomUUID(),
    type,
    createdAt: new Date().toISOString(),
    ipHash: hashIp(req),
    payload,
  });

  try {
    await sendSubmissionEmail(type, payload);
  } catch (error) {
    console.error('Submission was saved, but email delivery failed:', error);
  }
}

submissionsRouter.post('/contact', async (req, res) => {
  const payload = contactSchema.parse(req.body);
  await persist('contact', req, payload);
  res.status(201).json({ ok: true });
});

submissionsRouter.post('/join-team', async (req, res) => {
  const payload = joinTeamSchema.parse(req.body);
  await persist('join-team', req, payload);
  res.status(201).json({ ok: true });
});

submissionsRouter.post('/forms', async (req, res) => {
  const payload = salonFormSchema.parse(req.body);
  await persist('salon-form', req, payload);
  res.status(201).json({ ok: true });
});

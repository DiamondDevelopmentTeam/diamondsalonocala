import { createHash, randomUUID } from 'node:crypto';
import { Router, type Request } from 'express';
import { salonFormSchema } from '../schemas.js';
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
}

submissionsRouter.post('/forms', async (req, res) => {
  const payload = salonFormSchema.parse(req.body);
  await persist('salon-form', req, payload);
  res.status(201).json({ ok: true });
});

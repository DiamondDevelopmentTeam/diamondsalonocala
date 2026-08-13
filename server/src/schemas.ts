import { z } from 'zod';

const name = z.string().trim().min(2).max(120);
const email = z.string().trim().email().max(254);

const trimmed = (maximum: number) => z.string().trim().max(maximum);

export const salonFormSchema = z.object({
  formSlug: z.string().trim().min(2).max(120),
  formTitle: z.string().trim().min(2).max(200),
  name,
  email,
  phone: z.string().trim().min(7).max(40),
  appointmentDate: trimmed(40).default(''),
  serviceProvider: trimmed(150).default(''),
  notes: trimmed(4000).default(''),
  signatureName: z.string().trim().min(2).max(150),
  consent: z.literal(true),
}).strict();

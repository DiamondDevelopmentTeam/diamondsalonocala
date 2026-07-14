import { z } from 'zod';

const trimmed = (maximum: number) => z.string().trim().max(maximum);
const name = z.string().trim().min(2).max(120);
const email = z.string().trim().email().max(254);
const phone = z.string().trim().max(40).optional().default('');

export const contactSchema = z.object({
  name,
  email,
  phone,
  subject: trimmed(120).default('General question'),
  message: z.string().trim().min(10).max(4000),
});

export const joinTeamSchema = z.object({
  name,
  email,
  phone: z.string().trim().min(7).max(40),
  specialty: z.string().trim().min(2).max(120),
  licenseNumber: z.string().trim().min(2).max(120),
  yearsExperience: trimmed(40).default(''),
  instagramOrPortfolio: z.union([z.literal(''), z.string().trim().url().max(500)]).default(''),
  message: z.string().trim().min(20).max(4000),
});

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
});

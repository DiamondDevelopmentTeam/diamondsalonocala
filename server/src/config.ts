import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';

const fileName = fileURLToPath(import.meta.url);
const sourceDirectory = path.dirname(fileName);
const serverRoot = path.resolve(sourceDirectory, '..');
const projectRoot = path.resolve(serverRoot, '..');

dotenv.config({ path: path.resolve(projectRoot, '.env') });

export const config = {
  port: Number(process.env.PORT || 4000),
  clientOrigin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
  dataFile: path.resolve(projectRoot, process.env.DATA_FILE || 'server/data/submissions.json'),
  clientDist: path.resolve(projectRoot, 'client/dist'),
  resendApiKey: process.env.RESEND_API_KEY || '',
  submissionToEmail: process.env.SUBMISSION_TO_EMAIL || 'Brooke@diamondsalonocala.com',
  fromEmail: process.env.FROM_EMAIL || 'Diamond Salon Website <website@example.com>',
  isProduction: process.env.NODE_ENV === 'production',
};

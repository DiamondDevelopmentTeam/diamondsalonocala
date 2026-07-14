export type SubmissionType = 'contact' | 'join-team' | 'salon-form';

export type StoredSubmission = {
  id: string;
  type: SubmissionType;
  createdAt: string;
  ipHash: string;
  payload: Record<string, unknown>;
};

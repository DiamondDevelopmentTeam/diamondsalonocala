import type { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';

export const errorHandler: ErrorRequestHandler = (error, _req, res, next) => {
  void next;
  const requestId = String(res.locals.requestId || 'unknown');

  if (error instanceof ZodError) {
    res.status(400).json({
      error: 'Please check the form fields and try again.',
      requestId,
      fields: error.issues.map((issue) => ({ path: issue.path.join('.'), message: issue.message })),
    });
    return;
  }

  console.error(`[${requestId}]`, error);
  res.status(500).json({
    error: 'The website could not process the request. Please call the salon if the problem continues.',
    requestId,
  });
};

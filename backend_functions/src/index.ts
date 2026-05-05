import * as functions from 'firebase-functions';
import { withCors, withErrorHandling } from './utils/middleware';

export const health = functions.https.onRequest(
  withErrorHandling(
    withCors((req, res) => {
      res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        version: '1.0.0',
      });
    }),
  ),
);
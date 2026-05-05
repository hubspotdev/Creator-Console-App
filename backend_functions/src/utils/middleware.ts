import * as functions from 'firebase-functions';
import { Request, Response } from 'express';

export type Handler = (req: Request, res: Response) => void | Promise<void>;

export interface CorsOptions {
  origin?: string | string[];
  methods?: string[];
  headers?: string[];
}

const DEFAULT_CORS: CorsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  headers: ['Content-Type', 'Authorization'],
};

export function withCors(handler: Handler, options: CorsOptions = {}): Handler {
  const opts = { ...DEFAULT_CORS, ...options };

  return async (req: Request, res: Response) => {
    const origin = Array.isArray(opts.origin) ? opts.origin.join(',') : opts.origin || '*';
    res.set('Access-Control-Allow-Origin', origin);
    res.set('Access-Control-Allow-Methods', opts.methods?.join(', ') || 'GET, POST, OPTIONS');
    res.set('Access-Control-Allow-Headers', opts.headers?.join(', ') || 'Content-Type');

    if (req.method === 'OPTIONS') {
      res.status(204).send('');
      return;
    }

    await handler(req, res);
  };
}

export function withErrorHandling(handler: Handler): Handler {
  return async (req: Request, res: Response) => {
    try {
      await handler(req, res);
    } catch (error) {
      functions.logger.error('Request error', {
        error: error instanceof Error ? error.message : 'Unknown error',
        method: req.method,
        path: req.path,
      });
      res.status(500).json({ error: 'Internal server error' });
    }
  };
}
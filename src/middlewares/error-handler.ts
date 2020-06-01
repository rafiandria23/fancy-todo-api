import { Request, Response, NextFunction } from 'express';
import { HttpError } from 'http-errors';

import { CustomHttpError } from '@/types';

export default (
  err: HttpError | CustomHttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  switch (err.name) {
    case 'AuthorizationError':
      return res.status(401).json({ message: err.message });

    case 'BadRequestError':
      return res.status(400).json({ message: err.message });

    case 'JsonWebTokenError':
      return res.status(400).json({ message: 'Invalid token!' });

    case 'NotFoundError':
      return res
        .status(404)
        .json({ name: 'NotFoundError', status: 404, statusCode: 404, ...err });

    case 'AlreadyExistsError':
      return res.status(400).json({ ...err });

    case 'ValidationError':
      return res.status(400).json({ ...err });

    default:
      return res.status(500).json({
        message: err.message,
        name: err.name,
        status: 500,
        statusCode: 500,
      });
  }
};

import { isHttpError } from 'http-errors';
import { ZodError } from 'zod';

export interface IDefaultAPIResponse<T> {
  data: T;
  status?: number;
  success: boolean;
}

export interface IDefaultAPIErrorResponse {
  status?: number;
  success: boolean;
  message: string | { [key: string]: string };
}

export const returnSuccessResponse = <T>(
  data: T,
  status = 200
): IDefaultAPIResponse<T> => ({
  data,
  status,
  success: true,
});

export const returnErrorResponse = ({
  error,
  message,
  status = 500,
}: {
  error: unknown;
  message?: string;
  status?: number;
}): IDefaultAPIErrorResponse => {
  if (error instanceof ZodError) {
    const errorObj: { [key: string]: string } = {};
    error.issues.forEach((issue) => {
      errorObj[issue.path[0]] = issue.message;
    });

    return { message: errorObj, success: false, status: 409 };
  }

  if (!isHttpError(error))
    return {
      status,
      success: false,
      message: message || 'Something went wrong. Please try again.',
    };

  return {
    success: false,
    status: error.statusCode,
    message: message || error.message,
  };
};

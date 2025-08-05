
export const successResponse = (res, message, data = {}, statusCode = 200) => {
  return res.status(statusCode).json({
    status: 'success',
    message,
    data,
    error: null
  });
};

export const errorResponse = (res, message, error = {}, statusCode = 500) => {
  return res.status(statusCode).json({
    status: 'error',
    message,
    data: null,
    error
  });
};

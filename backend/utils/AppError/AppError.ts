class AppError extends Error {
  message: string;
  statusCode: number;
  status: "fail" | "server error" | "unknown";

  constructor(message: string, statusCode: number) {
    super(message);

    this.message = message;
    this.statusCode = statusCode;

    if (`${statusCode}`.startsWith(`4`)) {
      this.status = `fail`;
    } else if (`${statusCode}`.startsWith(`5`)) {
      this.status = `server error`;
    } else {
      this.status = `unknown`;
    }

    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;

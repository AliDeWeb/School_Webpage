interface ErrorControllerType extends Error {
  statusCode: number;
  status: string;
}

export default ErrorControllerType;

export abstract class HttpException extends Error {
  constructor(
    public message: string,
    public statusCode: number
  ) {
    super(message);
  }
}

export class InternalServerErrorException extends HttpException {
  constructor(public message: string) {
    super(message, 500);
  }
}

export class BadRequestException extends HttpException {
  constructor(public message: string) {
    super(message, 400);
  }
}

export class NotFoundException extends HttpException {
  constructor(public message: string) {
    super(message, 404);
  }
}

export class UnauthorizedException extends HttpException {
  constructor(public message: string) {
    super(message, 401);
  }
}

export class ForbiddenException extends HttpException {
  constructor(public message: string) {
    super(message, 403);
  }
}

export class ConflictException extends HttpException {
  constructor(public message: string) {
    super(message, 409);
  }
}

export class UnprocessableEntityException extends HttpException {
  constructor(public message: string) {
    super(message, 422);
  }
}

export class TooManyRequestsException extends HttpException {
  constructor(public message: string) {
    super(message, 429);
  }
}

export class NotImplementedException extends HttpException {
  constructor(public message: string) {
    super(message, 501);
  }
}

export class ServiceUnavailableException extends HttpException {
  constructor(public message: string) {
    super(message, 503);
  }
}

export class GatewayTimeoutException extends HttpException {
  constructor(public message: string) {
    super(message, 504);
  }
}

// for dtos errors we use: UnprocessableEntityException
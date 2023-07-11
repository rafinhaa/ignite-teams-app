import { BaseError } from "./appError";

export class PlayerAlreadyExistError extends BaseError {
  constructor(message?: string) {
    super(message ?? "Player already exists");
  }
}

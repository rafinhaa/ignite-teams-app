import { BaseError } from "./appError";

export class PlayerNotExistError extends BaseError {
  constructor(message?: string) {
    super(message ?? "Player not exists");
  }
}

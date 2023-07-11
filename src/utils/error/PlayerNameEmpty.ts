import { BaseError } from "./appError";

export class PlayerNameEmptyError extends BaseError {
  constructor(message?: string) {
    super(message ?? "Player name is empty");
  }
}

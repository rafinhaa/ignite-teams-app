import { BaseError } from "./appError";

export class GroupAlreadyExistsError extends BaseError {
  constructor(message?: string) {
    super(message ?? "Group already exists");
  }
}

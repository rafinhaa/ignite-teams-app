import { BaseError } from "./appError";

export class GroupNotExistsError extends BaseError {
  constructor(message?: string) {
    super(message ?? "Group not exists");
  }
}

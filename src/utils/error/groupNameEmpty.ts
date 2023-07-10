import { BaseError } from "./appError";

export class GroupNameEmptyError extends BaseError {
  constructor(message?: string) {
    super(message ?? "Group name is empty");
  }
}

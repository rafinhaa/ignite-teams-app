import type { AppRoutesParamList } from "./app.routes";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      groups: undefined;
      new: undefined;
      players: {
        group: string;
      };
    }
  }
}

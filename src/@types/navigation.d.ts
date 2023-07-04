import type { AppRoutesParamList } from "./app.routes";

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppRoutesParamList {}
  }
}

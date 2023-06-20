import { createContextId } from "@builder.io/qwik";

export type TThemeType = "light" | "dark" | "auto";

export interface IContextSettingState {
  theme?: TThemeType | null;
}
export const SettingContext = createContextId<IContextSettingState>("setting");

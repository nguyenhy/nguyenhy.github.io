import type { Options } from "./web";

export interface OptionsMap {
    web: Options;
}

export type SupportedTarget = keyof OptionsMap;

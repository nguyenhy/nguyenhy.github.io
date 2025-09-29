import { Exception } from "./exception";
import type { OptionsMap, SupportedTarget } from "./main.types";

import { run as webRun } from "./web";

export const run = <K extends SupportedTarget>(
    language: K,
    options: OptionsMap[K],
) => {
    if (language === "web") {
        return webRun(options);
    }

    throw new Exception("NOT_SUPPORTED");
};

export { Exception };

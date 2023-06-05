import { createContextId } from "@builder.io/qwik";
import type { ILayoutContextState } from "./layout.types";

export const LayoutContext = createContextId<ILayoutContextState>("layout");

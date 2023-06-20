import type { IDemoLayoutOptions } from "./DemoLayout.types";

export interface IDemoPropertiesOptions
  extends Omit<IDemoLayoutOptions, "child"> {
  properties: string[];
  selected: string;
  property: (item: string) => any;
  content: (item: string) => any;
}

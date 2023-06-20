import type { QRL } from "@builder.io/qwik";

export interface IDemoLayoutOptions {
  title: string;
  child: any;
  onReset?: QRL<() => void>;
}

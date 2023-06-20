import type { IDemoLayoutOptions } from "./DemoLayout.types";

export const DemoLayout = (props: IDemoLayoutOptions) => {
  return (
    <>
      <div class="flex flex-col border-2 border-slate-700 dark:border-slate-200 rounded-md ">
        <div class="border-[inherit] border-b-2 p-2 flex flex-row justify-between">
          <span class="text-xl font-bold first-letter:uppercase">
            {props.title}
          </span>
          {props.onReset == null ? null : (
            <button onClick$={props.onReset}>Reset</button>
          )}
        </div>
        <div>{props.child}</div>
      </div>
    </>
  );
};

import { DemoLayout } from "~/components/demo/DemoLayout";
import type { IDemoPropertiesOptions } from "./DemoProperties.types";

export const DemoProperties = (props: IDemoPropertiesOptions) => {
  const Content = () => {
    return (
      <div class="grid grid-cols-2 bg-white/10">
        <section class="border-r-2 border-sm p-3 flex flex-col">
          {props.properties.map((item) => {
            return (
              <div
                class={`border-2 rounded-sm mb-1 bg-black/20 dark:bg-white/30 text-slate-800 whitespace-pre overflow-x-auto ${
                  props.selected === item ? "border-accent" : "border-white"
                }`}
                key={item}
              >
                {props.property(item)}
              </div>
            );
          })}
        </section>
        <div class="p-3">{props.content(props.selected)}</div>
      </div>
    );
  };

  return (
    <DemoLayout
      title={props.title}
      onReset={props.onReset}
      child={<Content />}
    ></DemoLayout>
  );
};

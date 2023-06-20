import { $, component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import style from "./DemoFloatClear.css?inline";
import { DemoLayout } from "~/components/demo/DemoLayout";
import { DemoButton } from "~/components/demo/DemoButton";

export default component$(() => {
  useStylesScoped$(style);

  const clear = useSignal(false);
  const onClick = $(() => {
    clear.value = !clear.value;
  });

  const Content = () => (
    <div class="m-2">
      <DemoButton onClick$={onClick}>
        <span>{clear.value ? "Unclear float" : "Clear float"}</span>
      </DemoButton>
      <div>
        <div class="box float-right">
          <span>image 1</span>
        </div>
        <div
          class="box float-right"
          style={{ clear: clear.value ? "right" : "" }}
        >
          <span>{clear.value ? "clear: right;" : "image 2"}</span>
        </div>
        <p class="text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam corporis
          totam at magni quo praesentium sequi veritatis, voluptatum nulla iure
          fuga doloribus officia nobis delectus ea quos possimus ab reiciendis
          qui nihil. Cupiditate in enim architecto autem magni quae quia placeat
          nobis et incidunt doloribus hic temporibus neque ab commodi, esse
          optio deleniti odio itaque fugiat quisquam. Harum eaque dolores
          accusantium animi itaque voluptatem dolorum iusto facilis ea labore
          suscipit, beatae cumque?
        </p>
      </div>
    </div>
  );

  return <DemoLayout title="Demo clear float" child={<Content />} />;
});

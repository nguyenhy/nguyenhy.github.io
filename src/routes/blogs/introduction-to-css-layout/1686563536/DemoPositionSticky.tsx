import { component$, useStylesScoped$ } from "@builder.io/qwik";
import style from "./DemoPosition.css?inline";
import { DemoLayout } from "~/components/demo/DemoLayout";

export default component$(() => {
  useStylesScoped$(style);
  const Content = () => {
    return (
      <div class="wrapper h-[200px] overflow-auto">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
          cupiditate accusamus voluptas iste aut, et eos cumque blanditiis atque
          obcaecati aliquam nulla ipsam, mollitia voluptatum itaque tempore
          placeat ea vel?
        </p>
        <div class="item positioned sticky top-[20px]">positioned element</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
          suscipit optio minus autem totam possimus commodi aperiam dolorem
          cupiditate maiores, reprehenderit provident odio error sed non illum
          minima, blanditiis earum, nesciunt iure eveniet doloribus sapiente?
          Accusantium deleniti molestiae aut exercitationem aliquam aliquid
          ipsam dicta odio ullam dolore. Reiciendis nihil atque cumque unde qui
          recusandae corrupti sapiente doloribus ut, sequi hic molestiae officia
          deserunt. Cumque ut, in ad, aperiam quia voluptatum atque, ipsum
          consectetur excepturi recusandae possimus aut dignissimos tenetur odit
          vel magni accusantium facilis. Dolore, possimus deleniti vitae
          eligendi ducimus aut eius eveniet sit accusantium, fuga ipsa est et
          accusamus nobis quae! Officia dolores corporis adipisci dolor
          asperiores veritatis voluptates sequi? Rerum, nam saepe fugit ex culpa
          suscipit quibusdam nesciunt!
        </p>
      </div>
    );
  };

  return (
    <DemoLayout title="Demo Position Sticky" child={<Content />}></DemoLayout>
  );
});

import type { HTMLAttributes } from "@builder.io/qwik";

interface IDemoButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: any;
}
export const DemoButton = (props: IDemoButtonProps) => {
  const { children, class: className, ...attr } = props;
  return (
    <button
      class={`dark:bg-gray-700 dark:text-gray-200 bg-gray-200 text-black border border-gray-300 rounded-md px-4 py-2 ${className}`}
      {...attr}
    >
      {children}
    </button>
  );
};

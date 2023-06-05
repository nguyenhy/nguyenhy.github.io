import { component$ } from "@builder.io/qwik";

interface ILogo {
  /**
   * expect height of logo
   */
  height?: number;
}

export default component$<ILogo>(({ height }) => {
  const ratio = (height ?? 60) / 24;
  return (
    <img
      src="/assets/logo/hytorium_horizontal_long_trans.svg"
      width={60 * ratio}
      height={24 * ratio}
    />
  );
});

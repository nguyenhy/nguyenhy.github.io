import type { HTMLAttributes } from "@builder.io/qwik";
import Header from "../header/header";
import Footer from "../footer/footer";

interface IHeaderFooterMainLayoutProps
  extends HTMLAttributes<HTMLButtonElement> {}

export const HeaderFooterMainLayout = (props: IHeaderFooterMainLayoutProps) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

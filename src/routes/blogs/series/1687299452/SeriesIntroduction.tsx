import { Series } from "~/components/series";

export const SeriesIntroduction = (props: { highlight?: number }) => {
  return (
    <>
      <Series
        list={[
          {
            name: "Introduction To FrontEnd Web Development",
            url: "/blogs/introduction-to-web-development/1686525497/",
          },
          {
            name: "Introduction to HTML",
            url: "/blogs/introduction-to-html/1645744806/",
          },
          {
            name: "Introduction to CSS",
            url: "/blogs/introduction-to-css/1646522406/",
          },
          {
            name: "Introduction to Javascript",
            url: "/blogs/introduction-to-javascript/1686525497",
          },
          {
            name: "Introduction to CSS Layout",
            url: "/blogs/introduction-to-css-layout/1686563536",
          },
        ]}
        highlight={props.highlight}
      />
    </>
  );
};

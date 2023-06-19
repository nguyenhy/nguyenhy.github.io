interface ISeriesProps {
  list: { url: string; name: string }[];
  highlight?: number;
}
export const Series = (props: ISeriesProps) => {
  return (
    <>
      {props.list.length ? (
        <ul>
          {props.list.map((item, index) => {
            return (
              <li key={item.url}>
                <a href={item.url}>
                  {props.highlight == index ? (
                    <strong>{item.name}</strong>
                  ) : (
                    item.name
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      ) : null}
    </>
  );
};

import { ReactNode } from "react";

export interface Title {
  title: string;
}

export const Heading = ({ title }: Title) => {
  return <h1>{title}</h1>;
};

const List = <ListItem,>({
  items,
  renderer,
}: {
  items: ListItem[];
  renderer: (item: ListItem) => ReactNode;
}) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderer(item)}</li>
      ))}
    </ul>
  );
};

const Title = () => {
  return (
    <div>
      <Heading title="Hello" />;
      <List
        items={["a", "b", "c", "d"]}
        renderer={(str) => <strong>{str}</strong>}
      />
    </div>
  );
};

export default Title;

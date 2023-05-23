import { ReactElement, ReactNode } from "react";

const defaultContainerProps = {
  heading: <strong>my heading</strong>,
};

const Container = ({
  children,
  heading,
}: {
  children: ReactNode;
  heading: string
}): ReactElement | null => {
  return (
    <div>
      <h1>{heading}</h1>
      {children}
    </div>
  );
};

export default Container;

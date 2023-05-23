import React, { ReactElement, ReactNode } from "react";

interface Heading {
  children: ReactNode;
}

const HeadingContent = ({ children }: Heading): ReactElement | null => {
  return <h1>{children}</h1>;
};

export default HeadingContent;

import React from "react";
import clsx from "clsx";

type Props = {
  children: React.ReactElement | React.ReactElement[],
} & React.HtmlHTMLAttributes<HTMLDivElement>;

const Column: React.FunctionComponent<Props> = (props: Props) => {
  const { children, ...otherProps } = props;

  return (
    <div className={clsx("flex flex-col p-8 w-full", otherProps.className)}>
      {children}
    </div>
  );
};

export default Column;

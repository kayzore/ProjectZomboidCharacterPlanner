import { FunctionComponent, PropsWithChildren, ReactElement } from "react";

type Props = {
  ReactElement: ReactElement,
  title: string,
} & PropsWithChildren;

export const Title: FunctionComponent<Props> = (props: Props) => {
  const { children = null, ReactElement, title } = props;

  const Title = (
    <ReactElement.type className="text-xl font-medium">{title}</ReactElement.type>
  );

  if (children) {
    return (
      <div className="flex items-center justify-between">
        {Title}
        {children}
      </div>
    );
  }

  return Title;
};

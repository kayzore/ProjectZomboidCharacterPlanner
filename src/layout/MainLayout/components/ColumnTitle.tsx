import { FunctionComponent, PropsWithChildren } from "react";

import GenericTitle from "@shared/components/Title";

type Props = PropsWithChildren<{
  title: string,
}>;

export const ColumnTitle: FunctionComponent<Props> = (props: Props): JSX.Element => {
  const { children = null, title } = props;

  const Title = (
    <GenericTitle as="h2" className="text-xl font-medium">{title}</GenericTitle>
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

import { FunctionComponent, ReactNode } from "react";

import GenericTitle from "@shared/components/Title";

type Props = {
  asideChildren?: ReactNode,
  title: string,
};

export const ColumnTitle: FunctionComponent<Props> = (props: Props): JSX.Element => {
  const { asideChildren = null, title } = props;

  const Title = (
    <GenericTitle as="h2" className="text-xl font-medium">{title}</GenericTitle>
  );

  if (asideChildren) {
    return (
      <div className="flex items-center justify-between">
        {Title}
        {asideChildren}
      </div>
    );
  }

  return Title;
};

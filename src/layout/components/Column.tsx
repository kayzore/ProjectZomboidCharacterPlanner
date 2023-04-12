import { ComponentPropsWithoutRef, FunctionComponent, PropsWithChildren } from "react";
import clsx from "clsx";

type Props = PropsWithChildren & ComponentPropsWithoutRef<"div">;

export const Column: FunctionComponent<Props> = (props: Props) => {
  const { children, ...rest } = props;

  return (
    <div className={clsx("flex flex-col p-8 w-full", rest.className)}>
      {children}
    </div>
  );
};

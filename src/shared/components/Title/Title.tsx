import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from "react";

type TitleElementType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type Props<C extends ElementType> = {
  as?: C;
} & PropsWithChildren & ComponentPropsWithoutRef<C>;

const Title = <C extends ElementType = TitleElementType>(props: Props<C>): JSX.Element => {
  const { as, children, ...rest } = props;
  const Component = as || "h1";

  return (
    <Component {...rest}>{children}</Component>
  );
};

export default Title;

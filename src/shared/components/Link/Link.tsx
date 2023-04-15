import { ComponentPropsWithoutRef, FunctionComponent, PropsWithChildren } from "react";

import { localPath } from "@shared/helpers/url.helper";

type Props = PropsWithChildren & ComponentPropsWithoutRef<"a">;

const Link: FunctionComponent<Props> = (props: Props) => {
  const { children, href, ...rest } = props;

  return (
    <a href={href ? localPath(href) : href} {...rest}>
      {children}
    </a>
  );
};

export default Link;

import { AnchorHTMLAttributes, DetailedHTMLProps, FunctionComponent, ReactNode } from "react";

import { localPath } from "@shared/helpers/url.helper";

type Props = {
  children: ReactNode,
} & DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

const Link: FunctionComponent<Props> = (props: Props) => {
  const { children, href, ...rest } = props;

  return (
    <a href={href ? localPath(href) : href} {...rest}>
      {children}
    </a>
  );
};

export default Link;

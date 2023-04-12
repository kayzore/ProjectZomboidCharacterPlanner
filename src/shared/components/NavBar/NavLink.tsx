import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

import Link from "@shared/components/Link";

type NavLinkProps = {
  children?: React.ReactNode;
} & DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

const NavLink: React.FunctionComponent<NavLinkProps> = (props: NavLinkProps) => {
  const { children, ...otherProps } = props;

  return (
    <Link className="p-2.5 rounded-lg ring-slate-400 hover:bg-gray-100 dark:hover:bg-slate-700" {...otherProps}>
      {children}
    </Link>
  );
};

export default NavLink;

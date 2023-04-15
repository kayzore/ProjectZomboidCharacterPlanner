import { ComponentPropsWithoutRef, FunctionComponent, PropsWithChildren } from "react";

import Link from "@shared/components/Link";

type NavLinkProps = PropsWithChildren & ComponentPropsWithoutRef<"a">;

const NavLink: FunctionComponent<NavLinkProps> = (props: NavLinkProps) => {
  const { children, ...rest } = props;

  return (
    <Link className="p-2.5 rounded-lg ring-slate-400 hover:bg-gray-100 dark:hover:bg-slate-700" {...rest}>
      {children}
    </Link>
  );
};

export default NavLink;

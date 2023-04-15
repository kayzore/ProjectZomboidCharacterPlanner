import { FunctionComponent, PropsWithChildren } from "react";
import { Menu } from "@headlessui/react";

import { Action } from "@app/shared/types";

type NavDropDownItemProps = PropsWithChildren<{
  clicked?: Action<[]>
}>;

const NavDropDownItem: FunctionComponent<NavDropDownItemProps> = (props: NavDropDownItemProps) => {
  const { children, clicked } = props;

  return (
    <Menu.Item>
      <div className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-gray-100 dark:hover:bg-slate-900 cursor-pointer" onClick={clicked}>
        {children}
      </div>
    </Menu.Item>
  );
};

export default NavDropDownItem;

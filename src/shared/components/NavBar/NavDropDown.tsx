import { Fragment, FunctionComponent, PropsWithChildren } from "react";

import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

type NavDropDownProps = PropsWithChildren<{
  title: string;
}>;

const NavDropDown: FunctionComponent<NavDropDownProps> = (props: NavDropDownProps) => {
  const { children, title } = props;

  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center dark:text-white p-2.5 text-sm font-medium rounded-lg ring-slate-400 hover:bg-gray-100 dark:hover:bg-slate-700 cursor-pointer">
            {title}
            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-1 origin-top-right w-36 rounded-md bg-white dark:bg-slate-800 shadow-lg dark:shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {children}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default NavDropDown;

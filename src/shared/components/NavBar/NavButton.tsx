import { ComponentPropsWithoutRef, FunctionComponent, PropsWithChildren } from "react";

type NavButtonProps = PropsWithChildren & ComponentPropsWithoutRef<"button">;

const NavButton: FunctionComponent<NavButtonProps> = (props: NavButtonProps) => {
  const { children, ...rest } = props;

  return (
    <button
      type="button"
      className="p-2.5 rounded-lg ring-slate-400 hover:bg-gray-100 dark:hover:bg-slate-700 cursor-pointer"
      {...rest}
    >
      {children}
    </button>
  );
};

export default NavButton;

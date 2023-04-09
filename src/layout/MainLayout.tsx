import { FunctionComponent, ReactElement } from "react";

import NavBar from "@layout/components/NavBar";

type Props = {
  children: ReactElement | ReactElement[];
};

const MainLayout: FunctionComponent<Props> = (props: Props) => {
  const { children } = props;

  return (
    <>

      <header>
        <NavBar />
      </header>

      <main className="absolute top-0 right-0 bottom-0 left-0 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto pt-32 pb-16 h-full overflow-hidden">{children}</div>
      </main>
    </>
  );
};

export default MainLayout;

import React from "react";

import NavBar from "@shared/components/NavBar/NavBar";

type Props = {
	children: React.ReactElement | React.ReactElement[],
};

const MainLayout: React.FunctionComponent<Props> = (props: Props) => {
	const { children } = props;

	return (
		<>
			<NavBar />

			<div className="absolute top-0 right-0 bottom-0 left-0">
				<div className="container mx-auto pt-32 pb-16 h-full overflow-hidden">
					{children}
				</div>
			</div>
		</>
	);
};

export default MainLayout;

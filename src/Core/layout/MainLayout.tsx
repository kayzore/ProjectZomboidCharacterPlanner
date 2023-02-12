import React from "react";

import NavBar from "@shared/components/NavBar";

type Props = {
	children: React.ReactElement | React.ReactElement[],
};

const MainLayout: React.FunctionComponent<Props> = (props: Props) => {
	const { children } = props;

	return (
		<>
			<NavBar />

			<div className="container mx-auto mt-16">
				{children}
			</div>
		</>
	);
};

export default MainLayout;

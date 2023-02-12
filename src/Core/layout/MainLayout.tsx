import React from "react";

type Props = {
	children: React.ReactElement | React.ReactElement[],
};

const MainLayout: React.FunctionComponent<Props> = (props: Props) => {
	const { children } = props;

	return (
		<>
			{children}
		</>
	);
};

export default MainLayout;

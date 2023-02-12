import React from "react";
import clsx from "clsx";

type Props = {
	children: React.ReactElement | React.ReactElement[],
	className?: string,
};

const Column: React.FunctionComponent<Props> = (props: Props) => {
	const { children, className } = props;

	return (
		<div className={clsx("border-2 p-8 w-full", className)}>
			{children}
		</div>
	);
};

export default Column;

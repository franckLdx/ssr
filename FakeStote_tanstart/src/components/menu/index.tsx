import { Link as RouterLink } from "@tanstack/react-router";

type LinkProps = {
	to: string;
	params?: Record<string, any>;
	children: React.ReactNode;
	onClick?: () => void;
};

function Link({ to, params, children, onClick }: LinkProps) {
	return (
		<RouterLink
			to={to}
			params={params}
			onClick={onClick}
			className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
			activeProps={{
				className:
					"flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2",
			}}
			reloadDocument={true}
		>
			{children}
		</RouterLink>
	);
}

type TexpProps = {
	children: React.ReactNode;
};

function Text({ children }: TexpProps) {
	return <span className="font-medium">{children}</span>;
}

import { X } from "lucide-react";

type TitleProps = {
	onClose: () => void;
	children?: React.ReactNode;
};

function Title({ onClose, children }: TitleProps) {
	return (
		<div className="flex items-center justify-between p-4 border-b border-gray-700">
			<h2 className="text-xl font-bold">{children}</h2>
			<button
				onClick={onClose}
				className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
				aria-label="Close menu"
			>
				<X size={24} />
			</button>
		</div>
	);
}

export const Menu = {
	Link,
	Text,
	Title,
};

type TitleProps = {
	className?: string;
	children: React.ReactNode;
};

function H1({ className, children }: TitleProps) {
	return (
		<h1 className={`text-2xl md:text-3xl mb-4 font-medium ${className}`}>
			{children}
		</h1>
	);
}

function H2({ className, children }: TitleProps) {
	return (
		<h1 className={`text-xl md:text-2xl mb-2 font-medium ${className}`}>
			{children}
		</h1>
	);
}

export const Title = {
	H1,
	H2,
} as const;

type ButtonProps = {
	onClick: () => void;
	"aria-label"?: string;
	children?: React.ReactNode;
};

export function Button({
	onClick,
	children,
	"aria-label": ariaLabel,
}: ButtonProps) {
	return (
		<button
			onClick={onClick}
			className="p-2 hover:bg-gray-700 rounded-lg transition-colors border border-gray-300"
			aria-label={ariaLabel}
		>
			{children}
		</button>
	);
}

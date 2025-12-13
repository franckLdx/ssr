type ButtonProps = {
	className?: string;
	onClick?: () => void;
	"aria-label"?: string;
	children?: React.ReactNode;
};

export function Button({
	className,
	onClick,
	children,
	"aria-label": ariaLabel,
}: ButtonProps) {
	return (
		<button
			onClick={onClick}
			className={`p-2 hover:bg-gray-700 rounded-lg transition-colors border border-gray-300 ${className}`
			}
			aria-label={ariaLabel}
		>
			{children}
		</button>
	);
}

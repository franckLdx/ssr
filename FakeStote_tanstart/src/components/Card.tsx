import { Title } from "./Typo";

function Border({ children }: { children: React.ReactNode }) {
	return (
		<div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-4 w-128">
			{children}
		</div>
	);
}

function Footer({ children }: { children: React.ReactNode }) {
	return (
		<>
			<hr className="border-0 h-1 bg-black my-4 w-full" />
			{children}
		</>
	)
}


export const Card = {
	Border,
	Title: Title.H2,
	Footer
};

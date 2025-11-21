import { Title } from "@/components/typo";
import { createFileRoute } from "@tanstack/react-router";


export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div className="flex items-center justify-center min-h-screen">
			<Title.H1>Welcome Fake Store !</Title.H1>
		</div>
	);
}

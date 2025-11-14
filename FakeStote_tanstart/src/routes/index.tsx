import { Title } from "@/components/typo";
import {
	CATEGORIES_KEY,
	fetchCategories,
} from "@/services/categories/categories";
import {
	dehydrate,
	HydrationBoundary,
	QueryClient,
} from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

const loader = async (): Promise<any> => {
	const queryClient = new QueryClient();

	queryClient.prefetchQuery({
		queryKey: CATEGORIES_KEY,
		queryFn: fetchCategories,
	});

	return {
		dehydratedState: dehydrate(queryClient),
	};
};

export const Route = createFileRoute("/")({
	component: App,
	loader,
});

function App() {
	const { dehydratedState } = Route.useLoaderData<any>();

	return (
		<HydrationBoundary state={dehydratedState}>
			<div className="flex items-center justify-center min-h-screen">
				<Title.H1>Welcome Fake Store !</Title.H1>
			</div>
		</HydrationBoundary>
	);
}

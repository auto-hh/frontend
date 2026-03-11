import {
    QueryClient,
    QueryClientProvider as TanStackQueryProvider,
} from "@tanstack/react-query";
import type { PropsWithChildren } from "react";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 5 * 60 * 1000,
            gcTime: 30 * 60 * 1000,
            retry: 1,
            refetchOnWindowFocus: false,
        },
    },
});

export const QueryClientProvider = ({ children }: PropsWithChildren) => {
    return (
        <TanStackQueryProvider client={queryClient}>
            {children}
        </TanStackQueryProvider>
    );
};

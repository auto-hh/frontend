import { BrowserRouter } from "react-router-dom";
import type { PropsWithChildren } from "react";
import { QueryClientProvider } from "./QueryClientProvider";

export const AppProviders = ({ children }: PropsWithChildren) => {
    return (
        <BrowserRouter>
            <QueryClientProvider>{children}</QueryClientProvider>
        </BrowserRouter>
    );
};

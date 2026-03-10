import { BrowserRouter } from "react-router-dom";
import { type PropsWithChildren } from "react";

export const AppProviders = ({ children }: PropsWithChildren) => {
    return <BrowserRouter>{children}</BrowserRouter>;
};

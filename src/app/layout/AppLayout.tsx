import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface AppLayoutProps {
    children: React.ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
    const { pathname } = useLocation();
    const isLoginPage = pathname === "/login";

    useEffect(() => {
        document.body.setAttribute("data-page", isLoginPage ? "login" : "main");
        return () => document.body.removeAttribute("data-page");
    }, [isLoginPage]);

    return <main>{children}</main>;
};

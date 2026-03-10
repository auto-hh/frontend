import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { cookies } from "@/shared/lib";

type ComponentType = React.ComponentType<any>;

export function withAuth(
    Component: ComponentType,
    isAuth: boolean,
    redirectTo: string,
) {
    return function AuthWrapper(props: any) {
        const navigate = useNavigate();

        useEffect(() => {
            const authCookie = cookies.get("auth");
            const isAuthenticated = authCookie === "true";

            if (isAuthenticated !== isAuth) {
                navigate(redirectTo, { replace: true });
            }
        }, [navigate, redirectTo, isAuth]);

        return <Component {...props} />;
    };
}

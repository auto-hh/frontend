import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/entities/auth";

type ComponentType = React.ComponentType<any>;

export function withAuth(
    Component: ComponentType,
    isAuth: boolean,
    redirectTo: string,
) {
    return function AuthWrapper(props: any) {
        const auth = useAuthStore((state) => state.isAuth);
        const { checkAuth } = useAuthStore((state) => state.actions);
        const navigate = useNavigate();

        useEffect(() => {
            checkAuth();
        }, [auth, checkAuth]);

        useEffect(() => {
            if (isAuth !== auth) {
                navigate(redirectTo, { replace: true });
            }
        }, [navigate, redirectTo, auth, isAuth]);

        return <Component {...props} />;
    };
}

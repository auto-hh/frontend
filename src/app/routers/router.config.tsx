import type { RouteObject } from "react-router-dom";
import { Home } from "@/pages/Home";
import { Login } from "@/pages/Login";
import { AppRoutes } from "@/shared/config";

export const routerConfig: RouteObject[] = [
    {
        path: AppRoutes.HOME,
        element: <Home />,
    },
    {
        path: AppRoutes.LOGIN,
        element: <Login />,
    },
];

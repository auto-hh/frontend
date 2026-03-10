import { useRoutes } from "react-router-dom";
import { routerConfig } from "./router.config";

export const AppRouter = () => {
    return useRoutes(routerConfig);
};

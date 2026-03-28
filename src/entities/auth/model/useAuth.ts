import { useQuery } from "@tanstack/react-query";
import { checkAuth } from "../api/checkAuth";

export const useAuth = () =>
    useQuery({
        queryKey: ["auth"],
        queryFn: checkAuth,
    });

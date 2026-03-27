import { useQuery } from "@tanstack/react-query";
import { fetchProfile } from "../api/fetchProfile";

export const useProfile = () => {
    return useQuery({
        queryKey: ["profile"],
        queryFn: fetchProfile,
    });
};

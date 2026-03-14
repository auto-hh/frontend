import { useQuery } from "@tanstack/react-query";
import { fetchAnalysis } from "../api/fetchAnalysis";

export function useAnalysis() {
    const {
        data: analysis,
        isLoading,
        error,
        refetch,
    } = useQuery({
        queryKey: ["analysis"],
        queryFn: fetchAnalysis,
        enabled: false,
        staleTime: 5 * 60 * 1000,
    });

    return {
        analysis,
        isLoading,
        error,
        getAnalysis: refetch,
    };
}

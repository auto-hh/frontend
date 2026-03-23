import { useQuery } from "@tanstack/react-query";
import { fetchAnalysis } from "../api/fetchAnalysis";
import { useResumeSelection } from "@/entities/resumeList";

export function useAnalysis() {
    const id = useResumeSelection((state) => state.id);

    const {
        data: analysis,
        isLoading,
        error,
        refetch,
    } = useQuery({
        queryKey: ["analysis"],
        queryFn: () => fetchAnalysis(id),
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

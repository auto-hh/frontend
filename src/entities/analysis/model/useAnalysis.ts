import { useMutation } from "@tanstack/react-query";
import { fetchAnalysis } from "../api/fetchAnalysis";

export function useAnalysis() {
    const {
        data: analysis,
        isPending,
        error,
        mutate,
    } = useMutation({
        mutationKey: ["analysis"],
        mutationFn: (form) => fetchAnalysis(form),
    });

    return {
        analysis,
        isPending,
        error,
        getAnalysis: mutate,
    };
}

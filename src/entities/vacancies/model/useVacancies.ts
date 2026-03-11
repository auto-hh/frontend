import { useQuery } from "@tanstack/react-query";
import { fetchVacancies } from "../api/vacancies";

export function useVacancies() {
    const {
        data: vacancies = [],
        isLoading,
        error,
        refetch,
    } = useQuery({
        queryKey: ["vacancies"],
        queryFn: fetchVacancies,
        enabled: false,
        staleTime: 5 * 60 * 1000,
    });

    return {
        vacancies,
        isLoading,
        error,
        getVacancies: refetch,
    };
}

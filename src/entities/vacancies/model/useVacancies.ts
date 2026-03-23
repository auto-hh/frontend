import { useQuery } from "@tanstack/react-query";

export function useVacancies() {
    const {
        data: vacancies = [],
        isLoading,
        error,
        refetch,
    } = useQuery({
        queryKey: ["vacancies"],
        queryFn: () => [],
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

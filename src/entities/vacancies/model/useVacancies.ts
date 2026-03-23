import { useQuery } from "@tanstack/react-query";
import { fetchVacancies } from "../api/fetchVacancies";
import { useResumeSelection } from "@/entities/resumeList";

export function useVacancies() {
    const id = useResumeSelection((state) => state.id);

    const {
        data: vacancies = [],
        isLoading,
        error,
        refetch,
    } = useQuery({
        queryKey: ["vacancies"],
        queryFn: () => fetchVacancies(id),
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

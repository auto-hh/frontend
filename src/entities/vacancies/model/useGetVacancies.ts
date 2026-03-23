import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchVacancies } from "../api/fetchVacancies";

export function useGetVacancies() {
    const client = useQueryClient();

    const {
        data: vacancies = [],
        error,
        mutate,
        isPending,
    } = useMutation({
        mutationKey: ["mutate-vacancies"],
        mutationFn: async (form: any) =>
            fetchVacancies({ ...form, resume_id: 123 }),
        onSuccess: (data) => {
            client.setQueryData(["vacancies"], data);
        },
    });

    return {
        vacancies,
        error,
        getVacancies: mutate,
        isPending,
    };
}

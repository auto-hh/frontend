import { api } from "@/shared/api";
import type { Vacancy } from "../model/Vacancy";

export const fetchVacancies = async (): Promise<Vacancy[]> => {
    try {
        const { data } = await api.post("/llm/vacancies");
        return data;
    } catch (err) {
        console.log(err);
        return [];
    }
};

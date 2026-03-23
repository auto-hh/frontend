import { api } from "@/shared/api";
import type { Vacancy } from "../model/Vacancy";

export const fetchVacancies = async (form: any): Promise<Vacancy[]> => {
    try {
        const response = await api.post(`/resume`, form);

        console.log(response.data.matches);

        return response.data.matches;
    } catch (err) {
        console.log(err);
        return [];
    } finally {
        console.log("end fetchVacancies");
    }
};

import type { Vacancy } from "@/entities/vacancies";
import { api } from "@/shared/api";

export async function generateLetter(vacancy: Vacancy) {
    const {
        data: { letter },
    } = await api.post("/llm/generate", vacancy);

    return letter;
}

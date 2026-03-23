import { api } from "@/shared/api";
import type { CoverLetter } from "../model/CoverLetter";
import type { Vacancy } from "../model/Vacancy";

export const mockCoverLetter: CoverLetter = {
    id: "cl-1",
    text: "Здравствуйте! Меня заинтересовала ваша вакансия. Имею релевантный опыт работы.",
    createdAt: "2025-01-15T10:00:00Z",
};

export const mockVacancies: Vacancy[] = [
    {
        id: "1",
        title: "Frontend Developer",
        company: "Tech Corp",
        salary: "150 000 - 200 000 ₽",
        description: "Ищем опытного React-разработчика в команду",
        location: "Москва",
        postedAt: "2025-01-15T10:00:00Z",
        coverLetter: mockCoverLetter,
    },
    {
        id: "2",
        title: "Backend Developer",
        company: "StartUp Inc",
        salary: "180 000 - 250 000 ₽",
        description: "Разработка API на Node.js и Python",
        location: "Санкт-Петербург",
        postedAt: "2025-01-14T09:00:00Z",
        coverLetter: {
            ...mockCoverLetter,
            id: "cl-2",
            text: "Добрый день! Имею опыт работы с микросервисами.",
        },
    },
    {
        id: "3",
        title: "Fullstack Developer",
        company: "Web Studio",
        salary: "200 000 - 300 000 ₽",
        description: "Разработка веб-приложений под ключ",
        location: "Удаленно",
        postedAt: "2025-01-13T14:00:00Z",
        coverLetter: {
            ...mockCoverLetter,
            id: "cl-3",
            text: "Привет! Готов работать над интересными проектами.",
        },
    },
];

export const fetchVacancies = async (id: string | null): Promise<Vacancy[]> => {
    // TODO: Заменить на реальный API запрос

    console.log("fetchVacancies:");
    try {
        const response = await api.post(`/resume`, { id });

        console.log(response);
    } catch (err) {
        console.log(err);
    } finally {
        console.log("end fetchVacancies");
    }

    return mockVacancies;
};

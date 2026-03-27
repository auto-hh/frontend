import type { Vacancy } from "../model/Vacancy";
import { delay } from "@/shared/lib";

export const fetchVacancies = async (): Promise<Vacancy[]> => {
    await delay(2000);

    return [
        {
            job_title: "Frontend Developer",
            salary: "150 000 - 220 000 ₽",
            city: "Москва",
            body: "Разработка веб-приложений на React и TypeScript. Опыт работы от 2 лет.",
            link: "https://hh.ru/vacancy/1",
            work_format: "офис",
            score: 1.0,
        },
        {
            job_title: "Backend Developer",
            salary: "200 000 - 300 000 ₽",
            city: "Санкт-Петербург",
            body: "Разработка микросервисов на Node.js и Python. Опыт работы от 3 лет.",
            link: "https://hh.ru/vacancy/2",
            work_format: "офис",
            score: 0.85,
        },
        {
            job_title: "Fullstack Developer",
            salary: "120 000 - 180 000 ₽",
            city: "Казань",
            body: "Разработка fullstack-приложений для стартапов. React + Node.js.",
            link: "https://hh.ru/vacancy/3",
            work_format: "офис",
            score: 1.0,
        },
        {
            job_title: "DevOps Engineer",
            salary: "250 000 - 350 000 ₽",
            city: "Москва",
            body: "Автоматизация инфраструктуры и CI/CD процессов. Kubernetes, Docker, AWS.",
            link: "https://hh.ru/vacancy/4",
            work_format: "офис",
            score: 0.6,
        },
        {
            job_title: "QA Engineer",
            salary: "100 000 - 160 000 ₽",
            city: "Новосибирск",
            body: "Тестирование веб и мобильных приложений. Playwright, Jest, Postman.",
            link: "https://hh.ru/vacancy/5",
            work_format: "офис",
            score: 1.0,
        },
    ];
};

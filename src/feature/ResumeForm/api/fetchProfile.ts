import type { Profile } from "../model/Profile";

export async function fetchProfile(): Promise<Profile> {
    return {
        job_title: "Frontend Developer",
        grade: "middle",
        experience: "3 года",
        work_format: "гибрид",
        salary: "180 000 ₽",
        city: "Москва",
        about_me:
            "Разрабатываю веб-приложения на React и TypeScript. Люблю чистый код и хороший UX.",
        recent_jobs:
            "Разработка личного кабинета пользователя. Оптимизация производительности приложения.",
    };
}

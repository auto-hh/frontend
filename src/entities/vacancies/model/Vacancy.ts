export interface Vacancy {
    vacancy_id: number;
    target_role: string;
    job_title: string;
    experience: string;
    grade: "junior" | "middle" | "senior" | "lead" | string;
    skills_vac: string;
    vacancy_text: string;
    salary: string;
    score: number;
    cover_letter: string;
    company: string;
}

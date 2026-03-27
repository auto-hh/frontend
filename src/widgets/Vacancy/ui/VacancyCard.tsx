import { ArrowUpRight } from "lucide-react";
import s from "./VacancyCard.module.css";
import type { Vacancy } from "@/entities/vacancies";

export function VacancyCard({
    job_title,
    link,
    salary,
    city,
    score,
    work_format,
}: Vacancy) {
    const scoreColor =
        score >= 0.8 ? "#29ED36" : score >= 0.6 ? "#EDE029" : "#ED2929";

    return (
        <div className={s.container}>
            <div className={s.header}>
                <h3 className={s.jobTitle}>{job_title}</h3>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.linkWrapper}
                >
                    <ArrowUpRight className={s.link} />
                </a>
            </div>
            <div className={s.block}>
                <div className={s.meta}>
                    <div>{salary || "Зарплата не указана"}</div>
                    <div>{city}</div>
                    <div>{work_format}</div>
                </div>
                <div className={s.actions}>
                    <div className={s.letter}>Письмо</div>
                    <div
                        className={s.score}
                        style={{ backgroundColor: scoreColor }}
                    >
                        {score}
                    </div>
                </div>
            </div>
        </div>
    );
}

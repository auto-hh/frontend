import type { Vacancy } from "../model/Vacancy";
import s from "./VacancyCard.module.css";

interface VacancyCardProps {
    vacancy: Vacancy;
}

export function VacancyCard({ vacancy }: VacancyCardProps) {
    return (
        <article className={s.card}>
            <header className={s.header}>
                <h3 className={s.title}>{vacancy.title}</h3>
                <span className={s.company}>{vacancy.company}</span>
                {vacancy.salary && (
                    <span className={s.salary}>{vacancy.salary}</span>
                )}
            </header>

            <p className={s.description}>{vacancy.description}</p>

            {vacancy.location && (
                <span className={s.location}>📍 {vacancy.location}</span>
            )}

            <div className={s.coverLetter}>
                <h4>Сопроводительное письмо:</h4>
                <p>{vacancy.coverLetter.text}</p>
                <small>
                    Создано:{" "}
                    {new Date(
                        vacancy.coverLetter.createdAt,
                    ).toLocaleDateString()}
                </small>
            </div>
        </article>
    );
}

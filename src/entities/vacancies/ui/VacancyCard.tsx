import { useState } from "react";
import type { Vacancy } from "../model/Vacancy";
import s from "./VacancyCard.module.css";

interface VacancyCardProps {
    vacancy: Vacancy;
}

export function VacancyCard({ vacancy }: VacancyCardProps) {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyCoverLetter = async () => {
        try {
            await navigator.clipboard.writeText(vacancy.coverLetter.text);
            setIsCopied(true);

            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error("Не удалось скопировать текст:", err);
        }
    };

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

                <div className={s.meta}>
                    <small>
                        Создано:{" "}
                        {new Date(
                            vacancy.coverLetter.createdAt,
                        ).toLocaleDateString()}
                    </small>
                    <button
                        className={s.copyButton}
                        onClick={handleCopyCoverLetter}
                        type="button"
                        disabled={isCopied}
                    >
                        {isCopied ? "✓ Скопировано" : "📋 Копировать"}
                    </button>
                </div>
            </div>
        </article>
    );
}

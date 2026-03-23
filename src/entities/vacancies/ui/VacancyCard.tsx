import { useState } from "react";
import type { Vacancy } from "../model/Vacancy";
import s from "./VacancyCard.module.css";

interface VacancyCardProps {
    vacancy: Vacancy;
}

// Хелпер для проверки ошибки в сопроводительном письме
const isCoverLetterError = (text: string) =>
    text?.toLowerCase().includes("ошибка генерации") ||
    text?.toLowerCase().includes("error");

export function VacancyCard({ vacancy }: VacancyCardProps) {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyCoverLetter = async () => {
        if (isCoverLetterError(vacancy.cover_letter)) return;

        try {
            await navigator.clipboard.writeText(vacancy.cover_letter);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error("Не удалось скопировать текст:", err);
        }
    };

    return (
        <article className={s.card}>
            {/* === Header: Заголовок + Мета-теги === */}
            <header className={s.header}>
                <div className={s.titleBlock}>
                    <h3 className={s.title}>{vacancy.job_title}</h3>
                    {vacancy.target_role && (
                        <span className={s.targetRole}>
                            Цель: {vacancy.target_role}
                        </span>
                    )}
                </div>

                <div className={s.metaTags}>
                    {vacancy.company && (
                        <span className={s.company}>{vacancy.company}</span>
                    )}
                    <span className={s.grade}>{vacancy.grade}</span>
                    <span className={s.scoreTag}>
                        Score: {vacancy.score?.toFixed(2)}
                    </span>
                </div>
            </header>

            {/* === Основные параметры === */}
            <div className={s.params}>
                {vacancy.experience && (
                    <span className={s.param}>⏱ {vacancy.experience}</span>
                )}
                {vacancy.salary && vacancy.salary !== "Не указано" && (
                    <span className={s.param}>💰 {vacancy.salary}</span>
                )}
                {vacancy.skills_vac && (
                    <span className={s.param}>🛠 {vacancy.skills_vac}</span>
                )}
            </div>

            {/* === Описание вакансии === */}
            <div className={s.section}>
                <h4>Описание:</h4>
                <p className={s.vacancyText}>{vacancy.vacancy_text}</p>
            </div>

            {/* === Сопроводительное письмо === */}
            <div className={`${s.section} ${s.coverLetter}`}>
                <div className={s.coverLetterHeader}>
                    <h4>Сопроводительное письмо:</h4>
                    {!isCoverLetterError(vacancy.cover_letter) && (
                        <button
                            className={s.copyButton}
                            onClick={handleCopyCoverLetter}
                            type="button"
                            disabled={isCopied}
                        >
                            {isCopied ? "✓ Скопировано" : "📋 Копировать"}
                        </button>
                    )}
                </div>

                {isCoverLetterError(vacancy.cover_letter) ? (
                    <p className={s.errorText}>⚠️ {vacancy.cover_letter}</p>
                ) : (
                    <p className={s.coverLetterText}>{vacancy.cover_letter}</p>
                )}
            </div>
        </article>
    );
}

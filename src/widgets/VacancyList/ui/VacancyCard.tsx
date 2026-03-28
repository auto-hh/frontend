import { ArrowUpRight } from "lucide-react";
import s from "./VacancyCard.module.css";
import type { Vacancy } from "@/entities/vacancies";
import {
    CoverLetter,
    GenerateButton,
    useGenerateCoverLetter,
} from "@/features/GenerateLetter";

export function VacancyCard(vacancy: Vacancy) {
    const { job_title, link, salary, city, score, work_format } = vacancy;
    const {
        data: letter = "",
        mutate: generateCoverLetter,
        isPending,
    } = useGenerateCoverLetter();

    const scoreColor =
        score >= 0.8 ? "#29ED36" : score >= 0.6 ? "#EDE029" : "#ED2929";

    const onGenerate = async () => generateCoverLetter(vacancy);

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
            <div className={s.salary}>{salary || "Зарплата не указана"}</div>
            <div className={s.block}>
                <div className={s.meta}>
                    <div>{city}</div>
                    <div>{work_format}</div>
                </div>
                <div className={s.actions}>
                    <GenerateButton
                        letter={letter}
                        onGenerate={onGenerate}
                        isGenerating={isPending}
                    />
                    <div
                        className={s.score}
                        style={{ backgroundColor: scoreColor }}
                    >
                        {score.toFixed(2)}
                    </div>
                </div>
            </div>
            {!!letter && <CoverLetter letter={letter} />}
        </div>
    );
}

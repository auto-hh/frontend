import type { Vacancy } from "../model/Vacancy";
import { VacancyCard } from "./VacancyCard";
import s from "./VacancyList.module.css";

interface VacancyListProps {
    vacancies: Vacancy[];
}

export const VacancyList = ({ vacancies }: VacancyListProps) => {
    console.log(`vacancies: ${vacancies}`);

    return (
        !!vacancies.length && (
            <div className={s.container}>
                {vacancies.map((vacancy) => (
                    <VacancyCard key={vacancy.vacancy_id} vacancy={vacancy} />
                ))}
            </div>
        )
    );
};

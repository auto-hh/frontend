import type { Vacancy } from "../model/Vacancy";
import { VacancyCard } from "./VacancyCard";
import s from "./VacancyList.module.css";

interface VacancyListProps {
    vacancies: Vacancy[];
}

export const VacancyList = ({ vacancies }: VacancyListProps) => {
    return vacancies.length ? (
        <div className={s.container}>
            {vacancies.map((vacancy) => (
                <VacancyCard key={vacancy.id} vacancy={vacancy} />
            ))}
        </div>
    ) : (
        <p className={s.empty}>Вакансии не найдены</p>
    );
};

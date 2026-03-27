import { commonStyles } from "@/shared/styles";
import { useSearchOpportunity } from "../model/useSearchOpportunity";
import s from "./SearchVacancies.module.css";
import { Link } from "react-router-dom";
import { AppRoutes } from "@/shared/config";

interface SearchVacanciesProps {
    onSearch: () => Promise<void>;
}

export function SearchVacancies({ onSearch }: SearchVacanciesProps) {
    const { data: can } = useSearchOpportunity();

    return (
        <div className={s.container}>
            {can ? (
                <div className={commonStyles.button} onClick={onSearch}>
                    Найти вакансии
                </div>
            ) : (
                <div className={s.restrict}>
                    <div>Для начала заполните профиль</div>
                    <Link
                        to={AppRoutes.PROFILE}
                        className={`${commonStyles.button} ${s.link}`}
                    >
                        Перейти на страницу профиля
                    </Link>
                </div>
            )}
        </div>
    );
}

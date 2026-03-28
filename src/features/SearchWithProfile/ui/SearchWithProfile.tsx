import { commonStyles } from "@/shared/styles";
import { useSearchOpportunity } from "../model/useSearchOpportunity";
import s from "./SearchWithProfile.module.css";
import { Link } from "react-router-dom";
import { AppRoutes } from "@/shared/config";

interface SearchWithProfileProps {
    onSearch: () => Promise<void>;
    text: string;
}

export function SearchWithProfile({ onSearch, text }: SearchWithProfileProps) {
    const { data: can } = useSearchOpportunity();

    return (
        <div className={s.container}>
            {can ? (
                <div className={commonStyles.button} onClick={onSearch}>
                    {text}
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

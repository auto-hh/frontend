import s from "./Navigation.module.css";
import { Link } from "react-router-dom";
import { AppRoutes } from "@/shared/config";

export function Navigation() {
    return (
        <div className={s.container}>
            <Link to={AppRoutes.HOME} className={s.link}>
                Главная
            </Link>
            <Link to={AppRoutes.ANALYSIS} className={s.link}>
                Анализ
            </Link>
            <Link to={AppRoutes.PROFILE} className={s.link}>
                Профиль
            </Link>
        </div>
    );
}

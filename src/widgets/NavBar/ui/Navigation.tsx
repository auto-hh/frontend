import { LogOutButton } from "@/feature/auth";
import { Link } from "react-router-dom";
import s from "./Navigation.module.css";

export function Navigation() {
    return (
        <div className={s.container}>
            <Link to={"/"} className={s.link}>
                Главная
            </Link>
            <Link to={"/analysis"} className={s.link}>
                Анализ
            </Link>
            <Link to={"/profile"} className={s.link}>
                Профиль
            </Link>
            <LogOutButton className={s.logout} />
        </div>
    );
}

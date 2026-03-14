import { Link, useLocation } from "react-router-dom";
import { Link as LinkIcon } from "lucide-react";
import s from "./NavButton.module.css";
import { AppRoutes } from "@/shared/config";

export function NavButton() {
    const { pathname } = useLocation();

    const nextRoute =
        pathname === AppRoutes.HOME
            ? AppRoutes.ANALYSIS
            : pathname === AppRoutes.ANALYSIS
              ? AppRoutes.HOME
              : undefined;

    const label =
        pathname === AppRoutes.HOME
            ? "Перейти к анализу"
            : "Вернуться на главную";

    return (
        <>
            {nextRoute && (
                <Link to={nextRoute} className={s.link}>
                    <LinkIcon />
                    <div>{label}</div>
                </Link>
            )}
        </>
    );
}

import { commonStyles } from "@/shared/styles";
import { login } from "../api/login";
import { useAuthStore } from "@/entities/auth";
import { MoveRight } from "lucide-react";
import s from "./AuthButton.module.css";

export function AuthButton() {
    const { checkAuth } = useAuthStore((state) => state.actions);

    const onClick = async () => {
        await login();
        checkAuth();
    };

    return (
        <button
            onClick={onClick}
            className={`${commonStyles.button} ${s.button}`}
        >
            <div>Войти через hh.ru</div>
            <MoveRight />
        </button>
    );
}

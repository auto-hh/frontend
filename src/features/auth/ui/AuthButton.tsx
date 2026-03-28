import { commonStyles } from "@/shared/styles";
import { login } from "../api/login";
import { MoveRight } from "lucide-react";
import s from "./AuthButton.module.css";
import { useQueryClient } from "@tanstack/react-query";

export function AuthButton() {
    const queryClient = useQueryClient();

    const onClick = async () => {
        await login();
        queryClient.invalidateQueries({
            queryKey: ["auth"],
        });
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

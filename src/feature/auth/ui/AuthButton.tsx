import { commonStyles } from "@/shared/styles";
import { login } from "../api/login";
import { useAuthStore } from "@/entities/auth";

export function AuthButton() {
    const { checkAuth } = useAuthStore((state) => state.actions);

    const onClick = async () => {
        await login();
        checkAuth();
    };

    return (
        <button onClick={onClick} className={commonStyles.button}>
            Войти
        </button>
    );
}

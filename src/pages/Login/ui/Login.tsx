import { commonStyles } from "@/shared/styles";
import s from "./Login.module.css";
import { AuthButton } from "@/feature/auth";

export function Login() {
    return (
        <div className={s.container}>
            <h1 className={commonStyles.title}>Login</h1>

            <AuthButton />
        </div>
    );
}

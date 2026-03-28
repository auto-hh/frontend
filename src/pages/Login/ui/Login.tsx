import s from "./Login.module.css";
import { AuthButton } from "@/features/auth";

export function Login() {
    return (
        <main className={s.container}>
            <h1 className={s.title}>Поможем найти работу в 3 клика</h1>

            <AuthButton />
        </main>
    );
}

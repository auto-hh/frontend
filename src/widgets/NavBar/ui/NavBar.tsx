import s from "./NavBar.module.css";
import { useAuthStore } from "@/entities/auth";
import { Navigation } from "./navigation";

export function NavBar() {
    const isAuth = useAuthStore((state) => state.isAuth);

    return (
        <nav className={s.container}>
            <h2 className={s.title}>Auto-hh</h2>

            {isAuth && <Navigation />}
        </nav>
    );
}

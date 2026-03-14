import { LogOutButton } from "@/feature/auth";
import s from "./NavBar.module.css";
import { useAuthStore } from "@/entities/auth";
import { NavButton } from "./NavButton";

export function NavBar() {
    const isAuth = useAuthStore((state) => state.isAuth);

    return (
        <nav className={s.container}>
            <h2 className={s.title}>Auto-hh</h2>

            <NavButton />
            {isAuth && <LogOutButton className={s.logout} />}
        </nav>
    );
}

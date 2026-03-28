import { useEffect, useState } from "react";
import s from "./NavBar.module.css";
import { Navigation } from "./Navigation";
import { useAuth } from "@/entities/auth";

export function NavBar() {
    const { data: isAuth } = useAuth();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`${s.container} ${isScrolled ? s.scrolled : ""}`}>
            <h2 className={s.title}>AutoHH</h2>
            {isAuth && <Navigation />}
        </nav>
    );
}

import { useEffect, useState } from "react";
import s from "./NavBar.module.css";
import { Navigation } from "./Navigation";
import { useAuth } from "@/entities/auth";
import { useQueryClient } from "@tanstack/react-query";

export function NavBar() {
    const { data: isAuth } = useAuth();
    const [isScrolled, setIsScrolled] = useState(false);
    const queryClient = useQueryClient();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const reset = () => {
        queryClient.clear();
    };

    return (
        <nav className={`${s.container} ${isScrolled ? s.scrolled : ""}`}>
            <h2 onClick={reset} className={s.title}>
                AutoHH
            </h2>
            {isAuth && <Navigation />}
        </nav>
    );
}

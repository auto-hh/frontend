import s from "./LogoutButton.module.css";
import { useAuthStore } from "@/entities/auth";
import { LogOut } from "lucide-react";

interface LogOutButtonProps {
    className?: string;
}

export function LogOutButton({ className }: LogOutButtonProps) {
    const { logout } = useAuthStore((state) => state.actions);

    const handleLogout = () => {
        logout();
    };

    return (
        <LogOut className={`${s.logout} ${className}`} onClick={handleLogout} />
    );
}

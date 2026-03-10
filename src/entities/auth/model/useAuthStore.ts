import { create } from "zustand";
import { cookies } from "@/shared/lib";
import { config } from "@/shared/config";

interface AuthStore {
    isAuth: boolean;
    actions: {
        setAuth: (status: boolean) => void;
        logout: () => void;
        checkAuth: () => boolean;
    };
}

export const useAuthStore = create<AuthStore>((set, get) => ({
    isAuth: cookies.get(config.AUTH_COOKIE_NAME) === "true",

    actions: {
        setAuth: (status: boolean) => {
            if (status) {
                cookies.set(config.AUTH_COOKIE_NAME, "true", {
                    expires: 7 * 24 * 60 * 60,
                    path: "/",
                    secure: import.meta.env.PROD,
                    sameSite: "Strict",
                });
            } else {
                cookies.remove(config.AUTH_COOKIE_NAME, { path: "/" });
            }
            set({ isAuth: status });
        },

        logout: () => {
            cookies.remove(config.AUTH_COOKIE_NAME, { path: "/" });
            set({ isAuth: false });
        },

        checkAuth: () => {
            const hasCookie = cookies.get(config.AUTH_COOKIE_NAME) === "true";
            console.log(hasCookie);
            const { isAuth } = get();

            if (hasCookie !== isAuth) {
                set({ isAuth: hasCookie });
            }
            return hasCookie;
        },
    },
}));

export const AppRoutes = {
    HOME: "/",
    LOGIN: "/login",
    ABOUT: "/about",
} as const;

export type AppRoutesType = (typeof AppRoutes)[keyof typeof AppRoutes];

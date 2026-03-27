export const AppRoutes = {
    HOME: "/",
    LOGIN: "/login",
    ANALYSIS: "/analysis",
    PROFILE: "/profile",
} as const;

export type AppRoutesType = (typeof AppRoutes)[keyof typeof AppRoutes];

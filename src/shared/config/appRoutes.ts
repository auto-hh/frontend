export const AppRoutes = {
    HOME: "/",
    LOGIN: "/login",
    ANALYSIS: "/analysis",
} as const;

export type AppRoutesType = (typeof AppRoutes)[keyof typeof AppRoutes];

import { api } from "@/shared/api";

export async function checkAuth(): Promise<boolean> {
    try {
        await api.get("/user/me");
        return true;
    } catch (err) {
        return false;
    }
}

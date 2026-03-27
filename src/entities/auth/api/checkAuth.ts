import { api } from "@/shared/api";

export async function checkAuth(): Promise<boolean> {
    try {
        const res = await api.get("/user/me");

        console.log(res);
        debugger;
        return true;
    } catch (err) {
        return false;
    }
}

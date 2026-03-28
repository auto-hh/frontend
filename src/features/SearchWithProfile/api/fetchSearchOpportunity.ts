import { api } from "@/shared/api";

export async function fetchSearchOpportunity(): Promise<boolean> {
    try {
        await api.get("/user/has-profile");
        return true;
    } catch (err) {
        return false;
    }
}

import { config } from "@/shared/config";

export async function login() {
    if (typeof window !== undefined) {
        window.location.href = `http://api.localhost/auth/begin`;
    }
}

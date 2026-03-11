import { cookies } from "@/shared/lib";

export async function login() {
    cookies.set("auth", "true");
}

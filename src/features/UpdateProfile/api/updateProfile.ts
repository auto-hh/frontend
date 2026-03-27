import { api } from "@/shared/api";
import type { Profile } from "../model/Profile";

export async function updateProfile(form: Profile): Promise<Profile> {
    await api.post("/user/profile", form);

    return form;
}

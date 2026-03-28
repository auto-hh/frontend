import { api } from "@/shared/api";
import type { Profile } from "../model/Profile";

export async function fetchProfile(): Promise<Profile> {
    try {
        const { data } = await api.get("/user/profile");

        return {
            job_title: data.job_title,
            grade: data.grade,
            experience: data.experience,
            work_format: data.work_format,
            salary: data.salary,
            city: data.city,
            about_me: data.about_me,
            recent_jobs: data.recent_jobs,
        };
    } catch (err) {
        console.error(err);
        return {
            job_title: "",
            grade: "junior",
            experience: "",
            work_format: "",
            salary: 0,
            city: "",
            about_me: "",
            recent_jobs: "",
        };
    }
}

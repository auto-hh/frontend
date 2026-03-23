import { api } from "@/shared/api";

export async function fetchResumeList() {
    console.log("fetchResumeList:");
    try {
        const response = await api.get("/resumes");
        console.log(response);
    } catch (err) {
        console.log(err);
    } finally {
        console.log("end fetchResumeList");
    }

    return ["id-1", "id-2"];
}

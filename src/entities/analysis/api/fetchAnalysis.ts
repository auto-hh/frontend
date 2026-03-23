import { api } from "@/shared/api";
import type { ExplorationResult } from "../model/ExplorationResult";
import { mockExplorationResult } from "../model/mockAnalysis";

export const fetchAnalysis = async (form: any): Promise<ExplorationResult> => {
    console.log(form);

    console.log(`fetchAnalysis`);
    try {
        const { data } = await api.post("/analyze", {
            ...form,
            resume_id: "123",
        });
        return {
            tokens: data.tokens,
            status: data.status,
            resume_id: data.resume_id,
        };
    } catch (err) {
        console.log(err);
    } finally {
        console.log("end fetchAnalysis");
    }

    return mockExplorationResult;
};

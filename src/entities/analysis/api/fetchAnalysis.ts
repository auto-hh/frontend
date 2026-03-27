import { api } from "@/shared/api";
import type { ExplorationResult } from "../model/ExplorationResult";
import { mockExplorationResult } from "../model/mockAnalysis";
import { delay } from "@/shared/lib";

export const fetchAnalysis = async (form: any): Promise<ExplorationResult> => {
    console.log(`fetchAnalysis`);

    // await delay(1000);

    return mockExplorationResult;

    // try {
    //     const { data } = await api.post("/analyze", {
    //         ...form,
    //         resume_id: "123",
    //     });
    //     return {
    //         tokens: data.tokens,
    //         status: data.status,
    //     };
    // } catch (err) {
    //     console.log(err);
    // } finally {
    //     console.log("end fetchAnalysis");
    // }
};

import { api } from "@/shared/api";
import type { ExplorationResult } from "../model/ExplorationResult";
import { mockExplorationResult } from "../model/mockAnalysis";

export const fetchAnalysis = async (
    id: string | null,
): Promise<ExplorationResult> => {
    // TODO: Заменить на реальный API запрос
    console.log(`fetchAnalysis ${id}`);

    console.log("fetchAnalysis:");
    try {
        const response = await api.post("/analyze", { id });
        console.log(response);
    } catch (err) {
        console.log(err);
    } finally {
        console.log("end fetchAnalysis");
    }

    const response = await api.post("/analyze", { id });

    console.log(response);

    return mockExplorationResult;
};

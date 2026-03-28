import { api } from "@/shared/api";
import type { ExplorationResult } from "../model/ExplorationResult";

export const fetchAnalysis = async (): Promise<ExplorationResult> => {
    const { data: tokens } = await api.post("/llm/analysis");

    return {
        tokens,
        status: "success",
    };
};

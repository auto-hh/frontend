import type { ExplorationResult } from "../model/ExplorationResult";
import { mockExplorationResult } from "../model/mockAnalysis";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchAnalysis = async (
    id: string | null,
): Promise<ExplorationResult> => {
    // TODO: Заменить на реальный API запрос
    console.log(`fetchAnalysis ${id}`);
    await delay(3000);
    return mockExplorationResult;
};

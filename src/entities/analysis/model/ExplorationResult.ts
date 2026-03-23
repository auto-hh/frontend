export type Token = {
    text: string;
    weight: number;
    is_word: boolean;
};

export interface ExplorationResult {
    resume_id: number;
    tokens: Token[];
    status: string;
}

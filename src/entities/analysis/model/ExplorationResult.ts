export type Token = {
    text: string;
    weight: number;
    is_word: boolean;
};

export interface ExplorationResult {
    tokens: Token[];
    status: string;
}

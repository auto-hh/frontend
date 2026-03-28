import type { Token } from "../model/ExplorationResult";
import { Token as TokenUI } from "./Token";
import s from "./Tokens.module.css";

type AnalysisProps = {
    tokens: Token[];
    className?: string;
};

export function Tokens({ tokens, className }: AnalysisProps) {
    if (!tokens.length) {
        return;
    }

    return tokens.length ? (
        <div className={`${s.root} ${className || ""}`}>
            {tokens.map((token, idx) => (
                <TokenUI key={`token-${idx}`} {...token} />
            ))}
        </div>
    ) : (
        <div className={s.empty}>Нет данных для анализа</div>
    );
}

import type { Token } from "../model/ExplorationResult";
import styles from "./AnalysisItem.module.css";

type AnalysisProps = {
    tokens: Token[];
    className?: string;
};

export function AnalysisItem({ tokens, className }: AnalysisProps) {
    if (!tokens.length) {
        return;
    }

    return tokens.length ? (
        <div className={`${styles.root} ${className || ""}`}>
            {tokens.map((token, index) => {
                const percentage = token.is_word
                    ? Math.round(token.weight * 100)
                    : 0;

                const opacity = token.is_word ? 0.2 + token.weight * 0.8 : 0;

                return (
                    <div
                        key={`${token.text}-${index}`}
                        className={`${styles.token} ${!token.is_word ? styles.isNotWord : ""}`}
                        style={{
                            backgroundColor: `rgba(255, 200, 0, ${opacity})`,
                            borderRadius: "0.25rem",
                            padding: "0.125rem 0.25rem",
                        }}
                        title={`${token.text}: ${percentage}%`}
                        data-weight={token.weight}
                        data-percentage={percentage}
                    >
                        <span className={styles.tokenText}>{token.text}</span>
                    </div>
                );
            })}
        </div>
    ) : (
        <div className={styles.empty}>Нет данных для анализа</div>
    );
}

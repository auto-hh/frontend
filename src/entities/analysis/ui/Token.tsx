import s from "./Token.module.css";

interface TokenProps {
    text: string;
    weight: number;
    is_word: boolean;
}

export function Token({ text, weight, is_word }: TokenProps) {
    const weightClass =
        weight >= 0.8 ? s.high : weight >= 0.6 ? s.medium : s.low;

    return (
        <>
            {is_word && (
                <div className={`${s.token} ${!is_word ? s.isNotWord : ""}`}>
                    <span className={s.text}>{text}</span>
                    <div className={`${s.weight} ${weightClass}`}>
                        {weight.toFixed(2)}
                    </div>
                </div>
            )}
        </>
    );
}

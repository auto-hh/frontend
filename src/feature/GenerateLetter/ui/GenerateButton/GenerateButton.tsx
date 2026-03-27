import { useState } from "react";
import s from "./GenerateButton.module.css";

interface GenerateButtonProps {
    letter: string;
    isGenerating: boolean;
    onGenerate: () => Promise<void>;
}

export function GenerateButton({
    letter,
    isGenerating,
    onGenerate,
}: GenerateButtonProps) {
    const [isCopying, setIsCopying] = useState(false);

    const hasLetter = letter.trim().length > 0;

    const handleCopy = async () => {
        if (!hasLetter) return;

        setIsCopying(true);
        try {
            await navigator.clipboard.writeText(letter);
            setTimeout(() => setIsCopying(false), 1500);
        } catch (err) {
            console.error("Не удалось скопировать:", err);
            setIsCopying(false);
        }
    };

    const handleClick = () => {
        if (hasLetter) {
            handleCopy();
        } else {
            onGenerate();
        }
    };

    return (
        <button
            onClick={handleClick}
            disabled={isGenerating}
            className={`${s.container} ${hasLetter ? s.hasContent : s.noContent}`}
        >
            {isGenerating ? (
                <>Генерация...</>
            ) : isCopying ? (
                <>Скопировано</>
            ) : hasLetter ? (
                <>Копировать</>
            ) : (
                <>Сгенерировать</>
            )}
        </button>
    );
}

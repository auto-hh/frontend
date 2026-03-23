import { commonStyles } from "@/shared/styles";

export const ReloadPageButton = () => {
    const handleClear = () => {
        window.location.reload();
    };

    return (
        <button onClick={handleClear} className={commonStyles.button}>
            Попробовать еще
        </button>
    );
};

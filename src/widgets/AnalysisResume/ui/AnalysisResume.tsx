import { AnalysisItem, useAnalysis } from "@/entities/analysis";
import { commonStyles } from "@/shared/styles";
import { Loader } from "@/shared/ui/Loader/Loader";

export function AnalysisResume() {
    const { analysis, isLoading, getAnalysis } = useAnalysis();

    const onClick = () => {
        getAnalysis();
    };

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <AnalysisItem tokens={analysis?.tokens ?? []} />
            )}

            {!!analysis?.tokens.length || isLoading || (
                <button className={commonStyles.button} onClick={onClick}>
                    Анализировать
                </button>
            )}
        </>
    );
}

import s from "./Analysis.module.css";
import { commonStyles } from "@/shared/styles";
import { AnalysisItem, useAnalysis } from "@/entities/analysis";
import { Loader } from "@/shared/ui";

export function Analysis() {
    const { analysis, isPending } = useAnalysis();

    return (
        <div className={s.container}>
            <h1 className={commonStyles.title}>Analysis</h1>
            {isPending ? (
                <Loader />
            ) : (
                <>
                    <AnalysisItem tokens={analysis?.tokens ?? []} />
                </>
            )}
        </div>
    );
}

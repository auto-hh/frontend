import s from "./Analysis.module.css";
import { commonStyles } from "@/shared/styles";
import { AnalysisItem, useAnalysis } from "@/entities/analysis";
import { Loader } from "@/shared/ui";
import { ResumeForm } from "@/feature/ResumeForm";

export function Analysis() {
    const { analysis, isPending, getAnalysis } = useAnalysis();

    return (
        <div className={s.container}>
            <h1 className={commonStyles.title}>Analysis</h1>
            {isPending ? (
                <Loader />
            ) : (
                <>
                    {!!analysis || <ResumeForm onSubmit={getAnalysis} />}

                    <AnalysisItem tokens={analysis?.tokens ?? []} />
                </>
            )}
        </div>
    );
}

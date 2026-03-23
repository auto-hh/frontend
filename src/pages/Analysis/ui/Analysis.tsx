import { SelectResume } from "@/feature/selectResume";
import s from "./Analysis.module.css";
import { commonStyles } from "@/shared/styles";
import { AnalysisResume } from "@/widgets/AnalysisResume";
import { useAnalysis } from "@/entities/analysis";
import { ReloadPageButton } from "@/shared/ui";

export function Analysis() {
    const { analysis, isLoading } = useAnalysis();

    return (
        <div className={s.container}>
            <h1 className={commonStyles.title}>Analysis</h1>

            {!!analysis && !isLoading && <ReloadPageButton />}
            {!!analysis || isLoading || <SelectResume />}

            <AnalysisResume />
        </div>
    );
}

import s from "./Analysis.module.css";
import { commonStyles } from "@/shared/styles";
import { AnalysisResume } from "@/widgets/AnalysisResume";

export function Analysis() {
    return (
        <div className={s.container}>
            <h1 className={commonStyles.title}>Analysis</h1>

            <AnalysisResume />
        </div>
    );
}

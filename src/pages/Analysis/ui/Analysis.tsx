import s from "./Analysis.module.css";
import { Tokens, useAnalysis } from "@/entities/analysis";
import { SearchWithProfile } from "@/features/SearchWithProfile";
import { Loader } from "@/shared/ui";

export function Analysis() {
    const { analysis, isPending, getAnalysis } = useAnalysis();

    const onSearch = async () => getAnalysis();

    return (
        <div className={s.container}>
            {isPending ? (
                <div className={s.loader}>
                    <Loader />
                </div>
            ) : (
                <>
                    {!!analysis ? (
                        <Tokens tokens={analysis?.tokens ?? []} />
                    ) : (
                        <SearchWithProfile
                            onSearch={onSearch}
                            text={"Анализировать резюме"}
                        />
                    )}
                </>
            )}
        </div>
    );
}

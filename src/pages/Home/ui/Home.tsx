import s from "./Home.module.css";
import { Loader, ReloadPageButton } from "@/shared/ui";
import { useGetVacancies, VacancyList } from "@/entities/vacancies";
import { commonStyles } from "@/shared/styles";
import { ResumeForm } from "@/feature/ResumeForm";

export function Home() {
    const { vacancies, isPending, getVacancies } = useGetVacancies();

    return (
        <div className={s.container}>
            <h1 className={commonStyles.title}>Home</h1>

            {!!vacancies?.length && !isPending && <ReloadPageButton />}

            {!!vacancies?.length || isPending || (
                <ResumeForm onSubmit={getVacancies} />
            )}

            {isPending ? <Loader /> : <VacancyList vacancies={vacancies} />}
        </div>
    );
}

import s from "./Home.module.css";
import { Loader, ReloadPageButton } from "@/shared/ui";
import { useVacancies, VacancyList } from "@/entities/vacancies";
import { commonStyles } from "@/shared/styles";
import { SelectResume } from "@/feature/selectResume";

export function Home() {
    const { vacancies, isLoading, getVacancies } = useVacancies();

    const onClick = () => {
        getVacancies();
    };

    return (
        <div className={s.container}>
            <h1 className={commonStyles.title}>Home</h1>

            {!!vacancies.length && !isLoading && <ReloadPageButton />}
            {!!vacancies.length || isLoading || <SelectResume />}

            {isLoading ? <Loader /> : <VacancyList vacancies={vacancies} />}

            {!!vacancies.length || isLoading || (
                <button onClick={onClick} className={commonStyles.button}>
                    Сгенерировать
                </button>
            )}
        </div>
    );
}

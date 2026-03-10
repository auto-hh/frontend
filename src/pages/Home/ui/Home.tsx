import { Loader } from "@/shared/ui";
import s from "./Home.module.css";
import { useVacancies, VacancyList } from "@/entities/vacancies";
import { commonStyles } from "@/shared/styles";

export function Home() {
    const { vacancies, isLoading, getVacancies } = useVacancies();

    const onClick = () => {
        getVacancies();
    };

    return (
        <div className={s.container}>
            <h1 className={commonStyles.title}>Home</h1>

            {isLoading ? <Loader /> : <VacancyList vacancies={vacancies} />}

            {!!vacancies.length || isLoading || (
                <button onClick={onClick} className={commonStyles.button}>
                    Сгенерировать
                </button>
            )}
        </div>
    );
}

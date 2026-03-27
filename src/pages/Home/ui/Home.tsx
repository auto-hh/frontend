import s from "./Home.module.css";
import { Loader } from "@/shared/ui";
import { useGetVacancies, VacancyList } from "@/entities/vacancies";

export function Home() {
    const { vacancies, isPending } = useGetVacancies();

    return (
        <div className={s.container}>
            {isPending ? <Loader /> : <VacancyList vacancies={vacancies} />}
        </div>
    );
}

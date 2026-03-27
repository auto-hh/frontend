import s from "./Home.module.css";
import { Loader } from "@/shared/ui";
import { useGetVacancies, VacancyList } from "@/entities/vacancies";
import { SearchVacancies } from "@/feature/SearchVacancies";

export function Home() {
    const { vacancies, isPending, getVacancies } = useGetVacancies();
    const onSearch = async () => getVacancies();

    return (
        <div className={s.container}>
            {isPending ? (
                <div className={s.loader}>
                    <Loader />
                </div>
            ) : (
                <>
                    {!!vacancies.length ? (
                        <VacancyList vacancies={vacancies} />
                    ) : (
                        <SearchVacancies onSearch={onSearch} />
                    )}
                </>
            )}
        </div>
    );
}

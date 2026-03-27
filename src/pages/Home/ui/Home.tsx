import s from "./Home.module.css";
import { Loader } from "@/shared/ui";
import { useGetVacancies } from "@/entities/vacancies";
import { SearchWithProfile } from "@/features/SearchWithProfile";
import { VacancyList } from "@/widgets/VacancyList";

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
                        <SearchWithProfile
                            onSearch={onSearch}
                            text={"Найти вакансии"}
                        />
                    )}
                </>
            )}
        </div>
    );
}

import s from "./UpdateProfile.module.css";
import { commonStyles } from "@/shared/styles";
import { useProfileForm } from "../lib/useProfileForm";

export const UpdateProfile = () => {
    const { register, handleSubmit, errors, message } = useProfileForm();

    return (
        <form onSubmit={handleSubmit} className={s.container}>
            <div className={s.form}>
                <div className={s.fields}>
                    {/* === Должность === */}
                    <div className={s.field}>
                        <input
                            {...register("job_title")}
                            placeholder="Позиция"
                            className={errors.job_title ? s.error : ""}
                        />
                        {errors.job_title && (
                            <span className={s.error}>
                                {errors.job_title.message}
                            </span>
                        )}
                    </div>

                    {/* === Грейд === */}
                    <div className={s.field}>
                        <input
                            {...register("grade")}
                            placeholder="Грейд"
                            className={errors.grade ? s.error : ""}
                        />
                        {errors.grade && (
                            <span className={s.error}>
                                {errors.grade.message}
                            </span>
                        )}
                    </div>

                    {/* === Опыт работы (время) === */}
                    <div className={s.field}>
                        <input
                            {...register("experience")}
                            placeholder="Опыт работы (лет)"
                            className={errors.experience ? s.error : ""}
                        />
                        {errors.experience && (
                            <span className={s.error}>
                                {errors.experience.message}
                            </span>
                        )}
                    </div>

                    {/* === Зарплата (строка!) === */}
                    <div className={s.field}>
                        <input
                            {...register("salary")}
                            placeholder="Заработная плата"
                            className={errors.salary ? s.error : ""}
                        />
                        {errors.salary && (
                            <span className={s.error}>
                                {errors.salary.message}
                            </span>
                        )}
                    </div>

                    {/* === Город === */}
                    <div className={s.field}>
                        <input
                            {...register("city")}
                            placeholder="Город"
                            className={errors.city ? s.error : ""}
                        />
                        {errors.city && (
                            <span className={s.error}>
                                {errors.city.message}
                            </span>
                        )}
                    </div>

                    {/* === Формат работы === */}
                    <div className={s.field}>
                        <input
                            {...register("work_format")}
                            placeholder="Формат работы (офис/удалёнка/гибрид)"
                            className={errors.work_format ? s.error : ""}
                        />
                        {errors.work_format && (
                            <span className={s.error}>
                                {errors.work_format.message}
                            </span>
                        )}
                    </div>
                </div>

                <div className={s.fields}>
                    {/* === О себе === */}
                    <div className={s.field}>
                        <textarea
                            {...register("about_me")}
                            placeholder="О себе"
                            rows={6}
                            className={errors.about_me ? s.error : ""}
                        />
                        {errors.about_me && (
                            <span className={s.error}>
                                {errors.about_me.message}
                            </span>
                        )}
                    </div>

                    {/* === Опыт работы (детали) === */}
                    <div className={s.field}>
                        <textarea
                            {...register("recent_jobs")}
                            placeholder="Опыт работы (пет-проекты, обязанности и т.п.)"
                            rows={6}
                            className={errors.recent_jobs ? s.error : ""}
                        />
                        {errors.recent_jobs && (
                            <span className={s.error}>
                                {errors.recent_jobs.message}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {message && <div>{message}</div>}

            <button
                type="submit"
                className={`${commonStyles.button} ${s.button}`}
            >
                Сохранить изменения
            </button>
        </form>
    );
};

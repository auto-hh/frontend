import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import { zodResolver } from "@hookform/resolvers/zod";
import s from "./ResumeForm.module.css";
import { commonStyles } from "@/shared/styles";
import { resumeSchema, type ResumeFormData } from "../lib/resumeSchema";

export const ResumeForm = ({ onSubmit }: any) => {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        reset,
        formState: { errors }, // Ошибки из Zod
    } = useForm<ResumeFormData>({
        resolver: zodResolver(resumeSchema), // 🔗 Подключаем Zod
        defaultValues: {
            grade: "",
            job_title: "",
            salary_val: 0,
            skills_res: "",
            about_me: "",
            exp_count: 0,
            exp_text: "",
            edu_uni: "",
            edu_year: "",
        },
    });

    useFormPersist("resume", {
        watch,
        setValue,
    });

    const handleSub = async (form: any) => {
        await onSubmit({ resume_id: "id", ...form });
    };

    return (
        <form onSubmit={handleSubmit(handleSub)} className={s.container}>
            <h2>Резюме</h2>

            {/* === Грейд === */}
            <div className={s.field}>
                <input
                    {...register("grade")}
                    placeholder="Позиция (например, middle)"
                    className={errors.grade ? s.error : ""}
                />
                {errors.grade && (
                    <span className={s.errorText}>{errors.grade.message}</span>
                )}
            </div>

            {/* === Должность === */}
            <div className={s.field}>
                <input
                    {...register("job_title")}
                    placeholder="Название работы"
                    className={errors.job_title ? s.error : ""}
                />
                {errors.job_title && (
                    <span className={s.errorText}>
                        {errors.job_title.message}
                    </span>
                )}
            </div>

            {/* === Зарплата (число) === */}
            <div className={s.field}>
                <input
                    type="number"
                    {...register("salary_val", { valueAsNumber: true })}
                    placeholder="ЗП"
                    className={errors.salary_val ? s.error : ""}
                />
                {errors.salary_val && (
                    <span className={s.errorText}>
                        {errors.salary_val.message}
                    </span>
                )}
            </div>

            {/* === Навыки === */}
            <div className={s.field}>
                <input
                    {...register("skills_res")}
                    placeholder="Навыки (через запятую)"
                    className={errors.skills_res ? s.error : ""}
                />
                {errors.skills_res && (
                    <span className={s.errorText}>
                        {errors.skills_res.message}
                    </span>
                )}
            </div>

            {/* === Обо мне === */}
            <div className={s.field}>
                <input
                    {...register("about_me")}
                    placeholder="Обо мне"
                    className={errors.about_me ? s.error : ""}
                />
                {errors.about_me && (
                    <span className={s.errorText}>
                        {errors.about_me.message}
                    </span>
                )}
            </div>

            {/* === Опыт (число) === */}
            <div className={s.field}>
                <input
                    type="number"
                    {...register("exp_count", { valueAsNumber: true })}
                    placeholder="Кол-во опыта (лет)"
                    className={errors.exp_count ? s.error : ""}
                />
                {errors.exp_count && (
                    <span className={s.errorText}>
                        {errors.exp_count.message}
                    </span>
                )}
            </div>

            {/* === Опыт работы (текст) === */}
            <div className={s.field}>
                <input
                    {...register("exp_text")}
                    placeholder="Опыт работы"
                    className={errors.exp_text ? s.error : ""}
                />
                {errors.exp_text && (
                    <span className={s.errorText}>
                        {errors.exp_text.message}
                    </span>
                )}
            </div>

            {/* === Университет === */}
            <div className={s.field}>
                <input {...register("edu_uni")} placeholder="Университет" />
            </div>

            {/* === Год выпуска === */}
            <div className={s.field}>
                <input
                    {...register("edu_year")}
                    placeholder="Год окончания (ГГГГ)"
                    className={errors.edu_year ? s.error : ""}
                />
                {errors.edu_year && (
                    <span className={s.errorText}>
                        {errors.edu_year.message}
                    </span>
                )}
            </div>

            <div
                style={{
                    cursor: "pointer",
                    display: "flex",
                    textAlign: "center",
                }}
                onClick={() => reset()}
            >
                Очистить
            </div>

            <button type="submit" className={commonStyles.button}>
                Сгенерировать
            </button>
        </form>
    );
};

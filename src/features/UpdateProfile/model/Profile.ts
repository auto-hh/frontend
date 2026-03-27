import { z } from "zod";

export const profileSchema = z.object({
    job_title: z.string().min(1, "Укажите должность"),
    grade: z.preprocess(
        (val) => (typeof val === "string" ? val.toLowerCase() : val),
        z.enum(["junior", "middle", "senior"], {
            message: "Укажите грейд (junior/middle/senior)",
        }),
    ),
    experience: z.string().min(1, "Укажите опыт"),
    work_format: z.string().min(1, "Укажите формат работы"),
    salary: z.coerce
        .number({ message: "Должно быть числом" })
        .min(1, "Укажите зарплату"),
    city: z.string().min(1, "Укажите город"),
    recent_jobs: z.string().min(1, "Укажите последние места работы"),
    about_me: z.string().optional(),
});

// Автоматически выводим тип из схемы - это ключевое изменение!
export type Profile = z.infer<typeof profileSchema>;

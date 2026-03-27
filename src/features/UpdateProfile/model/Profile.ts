import { z } from "zod";

export const profileSchema = z.object({
    job_title: z.string().min(2, "Укажите должность (мин. 2 символа)"),

    grade: z.string().min(1, "Укажите грейд"),

    experience: z
        .string()
        .min(1, "Укажите опыт работы")
        .describe("Опыт работы (время)"),

    work_format: z.string().min(2, "Укажите формат работы"),

    salary: z
        .string()
        .min(1, "Укажите зарплату")
        .describe("Ожидаемая зарплата"),

    city: z.string().min(2, "Укажите город"),

    about_me: z
        .string()
        .min(10, "Минимум 10 символов")
        .optional()
        .or(z.literal("")),

    recent_jobs: z
        .string()
        .min(10, "Опишите опыт (мин. 10 символов)")
        .describe("Опыт работы"),
});

export type Profile = z.infer<typeof profileSchema>;

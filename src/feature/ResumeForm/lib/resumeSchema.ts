import { z } from "zod";

export const resumeSchema = z.object({
    resume_id: z.number().optional(),

    // === Строки ===
    grade: z.string().min(1, "Укажите грейд"),
    job_title: z.string().min(2, "Минимум 2 символа"),
    skills_res: z.string().optional().or(z.literal("")),
    about_me: z
        .string()
        .min(10, "Минимум 10 символов")
        .optional()
        .or(z.literal("")),
    exp_text: z.string().optional().or(z.literal("")),
    edu_uni: z.string().optional().or(z.literal("")),
    edu_year: z
        .string()
        .regex(/^\d{4}$/, "Год в формате ГГГГ")
        .optional()
        .or(z.literal("")),

    // === Числа (БЕЗ coerce!) ===
    salary_val: z
        .number()
        .min(0, "Не может быть отрицательной")
        .max(1_000_000, "Слишком много"),

    exp_count: z.number().min(0).max(50, "Не может быть больше 50 лет"),
});

export type ResumeFormData = z.infer<typeof resumeSchema>;

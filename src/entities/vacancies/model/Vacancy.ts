import type { CoverLetter } from "./CoverLetter";

export interface Vacancy {
    id: string;
    title: string;
    company: string;
    salary?: string;
    description: string;
    coverLetter: CoverLetter;
    location?: string;
    postedAt: string;
}

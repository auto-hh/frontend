import s from "./CoverLetter.module.css";

interface CoverLetterProps {
    letter: string;
}

export function CoverLetter({ letter }: CoverLetterProps) {
    return <div className={s.container}>{letter}</div>;
}

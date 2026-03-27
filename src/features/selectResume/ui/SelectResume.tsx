import { useResumeSelection } from "@/entities/resumeList";
import s from "./SelectResume.module.css";
import { useResumeList } from "@/entities/resumeList/model/useResumeList";
import { useEffect } from "react";

export function SelectResume() {
    const { data: resumeList } = useResumeList();
    const { setId } = useResumeSelection((state) => state.actions);
    const tmpId = useResumeSelection((state) => state.id);

    useEffect(() => {
        resumeList?.length && !tmpId && setId(resumeList[0]);
    }, [resumeList, tmpId, setId]);

    return (
        <div className={s.container}>
            <h3>Выберите резюме</h3>

            {resumeList?.map((id) => (
                <div
                    key={`resume-${id}`}
                    className={`${s.item} ${id === tmpId ? s.active : ""}`}
                    onClick={() => setId(id)}
                >
                    {id}
                </div>
            ))}
        </div>
    );
}

import { UpdateProfile } from "@/feature/ResumeForm";
import s from "./Profile.module.css";

export function Profile() {
    return (
        <div className={s.container}>
            <UpdateProfile />
        </div>
    );
}

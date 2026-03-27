import { UpdateProfile } from "@/features/UpdateProfile";
import s from "./Profile.module.css";

export function Profile() {
    return (
        <div className={s.container}>
            <UpdateProfile />
        </div>
    );
}

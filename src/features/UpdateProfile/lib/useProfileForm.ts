import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useFormPersist from "react-hook-form-persist";
import { type Profile, profileSchema } from "../model/Profile";
import { useProfile } from "../model/useProfile";
import { useUpdateProfile } from "../model/useUpdateProfile";
import { isDirty } from "./isDirty";

export const useProfileForm = () => {
    const { data } = useProfile();

    const { updateProfile, message, setMessage } = useUpdateProfile();

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        reset,
        formState: { errors },
    } = useForm<Profile>({
        resolver: zodResolver(profileSchema) as any,
        defaultValues: {
            job_title: "",
            grade: "junior",
            experience: "",
            work_format: "",
            salary: 0,
            city: "",
            about_me: "",
            recent_jobs: "",
        },
    });

    useFormPersist("resume", { watch, setValue });

    useEffect(() => {
        if (data) {
            reset(data);
        }
    }, [data, reset]);

    const formValues = watch();

    const hasChanges = useMemo(() => {
        if (!data) return false;
        return isDirty(data, formValues);
    }, [data, formValues]);

    const onSubmit = (form: Profile) => {
        if (!hasChanges) {
            setMessage("Измените хотя бы одно поле");
            return;
        }
        updateProfile(form);
    };

    return {
        register,
        handleSubmit: handleSubmit(onSubmit),
        watch,
        reset,
        errors,

        message,
        setMessage,
    };
};

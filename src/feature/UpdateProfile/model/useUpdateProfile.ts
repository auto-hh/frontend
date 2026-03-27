import { useState } from "react";
import { updateProfile } from "../api/updateProfile";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateProfile = () => {
    const [message, setMessage] = useState<string | null>(null);
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: updateProfile,
        onSuccess: () => {
            setMessage("Данные успешно обновлены");
            queryClient.invalidateQueries({
                queryKey: ["profile"],
            });
        },
        onError: () => {
            setMessage("Ошибка обновления профиля");
        },
    });

    return {
        updateProfile: mutation.mutate,
        isLoading: mutation.isPending,
        message,
        setMessage,
    };
};

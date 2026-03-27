import { useMutation } from "@tanstack/react-query";
import { generateLetter } from "../api/generateLetter";

export const useGenerateCoverLetter = () =>
    useMutation({
        mutationFn: generateLetter,
        onSuccess: (data) => {
            console.log(data);
        },
    });

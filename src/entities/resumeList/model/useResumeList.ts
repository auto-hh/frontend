import { useQuery } from "@tanstack/react-query";
import { fetchResumeList } from "../api/fetchResumeList";

export function useResumeList() {
    return useQuery({
        queryKey: ["resumeList"],
        queryFn: fetchResumeList,
        staleTime: 5 * 60 * 1000,
    });
}

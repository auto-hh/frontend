import { useQuery } from "@tanstack/react-query";
import { fetchSearchOpportunity } from "../api/fetchSearchOpportunity";

export function useSearchOpportunity() {
    return useQuery({
        queryKey: ["searchOpportunity"],
        queryFn: fetchSearchOpportunity,
    });
}

import { create } from "zustand";

interface useResumeSelectionStore {
    id: string | null;
    actions: {
        setId: (id: string) => void;
        clearId: () => void;
    };
}

export const useResumeSelection = create<useResumeSelectionStore>()((set) => ({
    id: null,
    actions: {
        setId: (id: string) => {
            set({ id });
        },
        clearId: () => set({ id: null }),
    },
}));

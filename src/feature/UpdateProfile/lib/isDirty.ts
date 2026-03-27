import type { Profile } from "../model/Profile";

export const isDirty = (
    original: Partial<Profile>,
    current: Partial<Profile>,
): boolean => {
    return JSON.stringify(original) !== JSON.stringify(current);
};

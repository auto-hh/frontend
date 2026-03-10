export interface CookieOptions {
    expires?: Date | number;
    path?: string;
    domain?: string;
    secure?: boolean;
    sameSite?: "Strict" | "Lax" | "None";
}

export const cookies = {
    get: (name: string): string | undefined => {
        if (typeof document === "undefined") return undefined;

        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);

        if (parts.length === 2) {
            return parts.pop()?.split(";").shift();
        }
        return undefined;
    },

    set: (name: string, value: string, options: CookieOptions = {}): void => {
        if (typeof document === "undefined") return;

        let cookieString = `${name}=${value}`;

        if (options.expires) {
            if (typeof options.expires === "number") {
                const date = new Date();
                date.setTime(date.getTime() + options.expires * 1000);
                cookieString += `; expires=${date.toUTCString()}`;
            } else {
                cookieString += `; expires=${options.expires.toUTCString()}`;
            }
        }

        if (options.path) {
            cookieString += `; path=${options.path}`;
        } else {
            cookieString += `; path=/`;
        }

        if (options.domain) {
            cookieString += `; domain=${options.domain}`;
        }

        if (options.secure) {
            cookieString += `; secure`;
        }

        if (options.sameSite) {
            cookieString += `; samesite=${options.sameSite.toLowerCase()}`;
        }

        document.cookie = cookieString;
    },

    remove: (name: string, options: CookieOptions = {}): void => {
        if (typeof document === "undefined") return;

        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${options.path || "/"}${options.domain ? `; domain=${options.domain}` : ""}`;
    },
};

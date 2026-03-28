export async function login() {
    if (typeof window !== undefined) {
        window.location.href = `http://localhost/api/auth/begin`;
    }
}

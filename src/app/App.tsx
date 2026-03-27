import { NavBar } from "@/widgets/NavBar";
import { AppProviders } from "./providers/AppProviders";
import { AppRouter } from "./routers/AppRouter";
import { AppLayout } from "./layout/AppLayout";

export const App = () => {
    return (
        <AppProviders>
            <AppLayout>
                <NavBar />
                <AppRouter />
            </AppLayout>
        </AppProviders>
    );
};

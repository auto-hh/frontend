import { NavBar } from "@/widgets/NavBar";
import { AppProviders } from "./providers/AppProviders";
import { AppRouter } from "./routers/AppRouter";

export const App = () => {
    return (
        <AppProviders>
            <NavBar />
            <AppRouter />
        </AppProviders>
    );
};

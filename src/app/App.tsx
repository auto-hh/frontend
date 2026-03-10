import { AppProviders } from "./routers/AppProviders";
import { AppRouter } from "./routers/AppRouter";

export const App = () => {
    return (
        <AppProviders>
            <AppRouter />
        </AppProviders>
    );
};

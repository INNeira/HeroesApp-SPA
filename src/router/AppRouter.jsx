import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { Navbar } from "../ui/components";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route
                    path="/login"
                    element={
                        <PublicRoute>
                            <LoginPage />
                        </PublicRoute>
                    }
                />

                {/* Tengo la misma estructura que antes, pero ahora el componente */}
                {/* que se renderiza con la proteccón de rutas, se lo tiene que envolver */}
                {/* dentro del componente ''padre'' que tiene la validación de como ingresar. */}
                <Route
                    path="/*"
                    element={
                        <PrivateRoute>
                            <HeroesRoutes />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </>
    );
};

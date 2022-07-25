import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
    const { login } = useContext(AuthContext);

    const navigate = useNavigate();

    const onLogin = () => {
        const lastPath = localStorage.getItem("lastPath") || "/";

        login("Nacho Neira");

        navigate(lastPath, {
            replace: true,
        });
    };

    return (
        <>
            <div className="container">
                <h1>Login</h1>

                <button onClick={onLogin} className="btn btn-primary">
                    Login
                </button>
            </div>
        </>
    );
};

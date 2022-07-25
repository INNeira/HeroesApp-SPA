import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

//Este modulo nos va ayudar para obtener todo de la URL, ya sean params o cualquier cosa
import queryString from "query-string";

// Componentes
import { HeroeCard } from "../components/HeroeCard";
import { getHeroesByName } from "../helpers/getHeroByName";

export const SearchPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { q = "" } = queryString.parse(location.search);

    const heroes = getHeroesByName(q);

    const showSearch = q.length === 0;
    const showError = q.length > 0 && heroes.length === 0;

    const { searchText, onInputChange } = useForm({
        searchText: q,
    });

    const onSearchSubmit = (e) => {
        e.preventDefault();
        // if (searchText.trim().length <= 1) return;

        //Usando el hook de react router
        //le estoy especificando que se quede en la ruta actual
        //pero que le agregue este query params
        navigate(`?q=${searchText}`);
    };

    return (
        <>
            <h1>Search</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />

                    <form onSubmit={onSearchSubmit}>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Search a Hero"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={onInputChange}
                        />

                        <button className="btn btn-outline-primary mt-1">
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    <div
                        className="alert alert-primary"
                        style={{ display: showSearch ? "" : "none" }}>
                        Search a hero
                    </div>

                    <div
                        className="alert alert-danger"
                        style={{ display: showError ? "" : "none" }}>
                        No hero with <b>{q}</b>
                    </div>

                    {heroes.map((hero) => (
                        <HeroeCard key={hero.id} {...hero} />
                    ))}
                </div>
            </div>
        </>
    );
};

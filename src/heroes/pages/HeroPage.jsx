import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";

export const HeroPage = () => {
    const { id } = useParams();

    const hero = useMemo(() => getHeroById(id), [id]);

    const navigate = useNavigate();

    const onNavigateBack = (publisher) => {
        // if (publisher === "DC Comics") {
        //     navigate("/dc", {
        //         replace: true,
        //     });
        //     return;
        // }

        // navigate("/", {
        //     replace: true,
        // });

        //Se puede hacer mas facil con esto, pero OJO que nos puede sacar de la web
        navigate(-1);
    };

    if (!hero) {
        return <Navigate to={"/marvel"} />;
    }

    return (
        <div className="row mt-5">
            <div className="col-4 animate__animated animate__fadeInLeft">
                <img
                    className="img-thumbnail"
                    src={`/assets/heroes/${id}.jpg`}
                    alt={hero.superhero}
                />
            </div>

            <div className="col-8 animate__animated animate__fadeInRight">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter ego: </b>
                        {hero.alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b>Publisher: </b>
                        {hero.publisher}
                    </li>
                    <li className="list-group-item">
                        <b>First appearance: </b>
                        {hero.first_appearance}
                    </li>
                </ul>

                <h5 className="mt-3"> Characters</h5>
                <p>{hero.characters}</p>

                <button
                    onClick={onNavigateBack}
                    className="btn btn-outline-primary">
                    Regresar
                </button>
            </div>
        </div>
    );
};

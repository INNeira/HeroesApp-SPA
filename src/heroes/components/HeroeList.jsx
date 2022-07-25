import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { HeroeCard } from "./HeroeCard";

export const HeroeList = ({ publisher }) => {
    let heroesList = [];

    heroesList = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <>
            <div className="row rows-cols-1 row-cols-md-3 g-3">
                {heroesList.map((heroe, i) => (
                    <HeroeCard index={i} key={heroe.id} {...heroe} />
                ))}
            </div>
        </>
    );
};

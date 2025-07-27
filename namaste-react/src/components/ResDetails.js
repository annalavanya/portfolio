import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { RES_DETAILS } from "../utility/constants";
import ShimmerComponent from "./Shimmer";

const ResDetail = () => {
    const [resDetails, setResDetails] = useState(null);

    const { resId } = useParams();
    console.log(resId);

    useEffect(() => {
        getResDetailsFromBackend();
    }, []);

    const getResDetailsFromBackend = async () => {
        const data = await fetch(RES_DETAILS+resId);
        const json = await data.json();
        setResDetails(json?.data?.cards);
    };

    if(resDetails === null) return <ShimmerComponent/>;
    
    const { name } = resDetails[2]?.card?.card?.info;
    const { itemCards }  = resDetails[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log("cards", itemCards);

    return (!itemCards) ? <h2>No Details Found</h2> : (
        <div>
            <h2>{name}</h2>
            <ul>
                {
                    itemCards.map((res) => <li key={res?.card?.info?.id}>{res?.card?.info?.name}  -  {"Rs."}
                    { res?.card?.info?.price/100 || res?.card?.info?.variantsV2?.variantGroups[1]?.variations[0]?.price}
                    </li>)
                }
            </ul>
        </div>
    )
}
export default ResDetail;
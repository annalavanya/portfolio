import { useParams } from "react-router-dom";
import ShimmerComponent from "./Shimmer";
import useRestaurantDetail from "../utility/useRestaurantDetail";

const ResDetail = () => {
    const { resId } = useParams();

    const resDetails = useRestaurantDetail(resId);

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
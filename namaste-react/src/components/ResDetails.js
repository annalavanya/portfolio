import { useParams } from "react-router-dom";
import ShimmerComponent from "./Shimmer";
import useRestaurantDetail from "../utility/useRestaurantDetail";
import RestaurantItem from "./RestaurantItem";
import { useState } from "react";

const ResDetail = () => {
    const { resId } = useParams();

     const [isAccordian, setIsAccordian] = useState(null);

    const resDetails = useRestaurantDetail(resId);

    if(resDetails === null) return <ShimmerComponent/>;
    
    const { name } = resDetails[2]?.card?.card?.info;
    const { itemCards }  = resDetails[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;


    const categories = 
        resDetails[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => 
            c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");


    return (!itemCards) ? <h2>No Details Found</h2> : (
        <div className="w-6/12 m-auto my-6 text-center text-black">
        <h2 className="text-xl font-bold">{name}</h2>
            <div className="">
                {
                    categories.map((data, index) => <RestaurantItem key={data?.card?.card?.title} {...data} 
                    isAccordian = { index === isAccordian ? true : false } 
                    showAccordian = {(isAccordian === index) ?  () => setIsAccordian(null): () => setIsAccordian(index)}/> )
                }
            </div>
        </div>
    )
}
export default ResDetail;
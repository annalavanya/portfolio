import {IMAGE_URL} from "../utility/constants"

// context
import { useContext } from "react";
import UserContext from "../utility/UserContext";


const CardComponent = (props) => {


    const { user } = useContext(UserContext);


    console.log(props);
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla: { slaString } } = props?.resData?.info;
    return (
        <div className="w-60 h-110 bg-gray-100 hover:bg-gray-200 border-gray-200 m-6 rounded-xl shadow-2xl">
            <img className="p-4 w-75 h-45 rounded-3xl" 
            src= {IMAGE_URL+cloudinaryImageId}
            alt="Food Image"/>
            <div className="pl-4 p-2 pt-1 justify-center">
                <h4 className="font-bold text-l">{name}</h4>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{costForTwo}</h4>
                <h4>{slaString}</h4>
                <h4 className="pt-1">
                    <span className="font-bold pr-1">{avgRating}</span>
                    <span>ratings</span>
                </h4>
                <h4>UserName:{user}</h4>
            </div>
        </div>
    )
}
export default CardComponent;

export function WithPromotedLabel(CardComponent) {
    return (props) => {
        return (
            <div>
                <div className="absolute ml-5 mt-2 bg-black rounded-2xl w-22">
                    <label className="p-2 text-white">Promoted</label>
                </div>
                <CardComponent {...props} />
            </div>
        )
    };
};
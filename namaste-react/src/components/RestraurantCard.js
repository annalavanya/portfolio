import {IMAGE_URL} from "../utility/constants"
const CardComponent = (props) => {
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla: { slaString } } = props?.resData?.info;
    return (
        <div className="card">
            <img className="card-img" 
            src= {IMAGE_URL+cloudinaryImageId}
            alt="Food Image"/>
            <div className="card-content">
                <h4>{name}</h4>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating} ratings</h4>
                <h4>{costForTwo}</h4>
                <h4>{slaString}</h4>
            </div>
        </div>
    )
}
export default CardComponent;
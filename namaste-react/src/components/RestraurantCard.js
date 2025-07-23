const CardComponent = (props) => {
    const { resName, foodName, cuisines, ratings, time, imageUrl } = props?.resData;
    return (
        <div className="card">
            <img className="card-img" 
            src= {imageUrl}
            alt="Food Image"/>
            <div className="card-content">
                <h4>{resName}</h4>
                <h4>{foodName}</h4>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{ratings+ " " + "stars"}</h4>
                <h4>{time}</h4>
            </div>
        </div>
    )
}
export default CardComponent;
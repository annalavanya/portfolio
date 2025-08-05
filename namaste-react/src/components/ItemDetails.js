import {IMAGE_URL} from "../utility/constants";
const ItemDetails = (props) => {
    console.log(props.card.info);
    const { name, price, defaultPrice, description, imageId} = props?.card?.info;
    return (
        <div className="border-b-1 border-b-gray-300">
            <div className="m-2 mt-3">
                <h5 className="font-bold text-m mt-1">{name}</h5>
                <h5 className="mt-2">₹ {price ? price/100 : defaultPrice/100}</h5>
            <div className="flex justify-between">
                <div className="w-9/12 m-1 p-1">
                    <p className="text-m text-justify pb-3">{description}</p>
                </div>
                <div className="w-3/12 ml-15 mb-10">
                    <div className="absolute ml-7">
                        <button className="w-15 h-8 mb-30 bg-black text-white rounded-xl cursor-pointer hover:bg-gray-500">ADD</button>
                    </div>
                <img src={IMAGE_URL + imageId} alt="Image will be shown soon!" className="h-30 w-30 rounded-2xl"/>
                </div>
            </div>
        </div>
    </div>
    )
}
export default ItemDetails;

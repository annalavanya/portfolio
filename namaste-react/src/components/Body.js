import  CardComponent, {WithPromotedLabel} from "./RestraurantCard";
import { useContext, useEffect, useState } from "react";
import ShimmerComponent from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utility/useOnlineStatus";
import UserContext from "../utility/UserContext";

const BodyComponent = () => {
    const [resLists, setResLists] = useState([]);

    const [filteredResLists, setFilteredResLists] = useState([]);

    const [searchButton, setSearchButton] = useState('');


    const {setUserNameUpdate} = useContext(UserContext);

    // useEffect
    useEffect(()=> {
        getFetchedData();
    }, []);

    if(useOnlineStatus() === false) return <h1>You are in Offline!!!</h1>;

    const PromotedLabelFunction = WithPromotedLabel(CardComponent);

    const getFetchedData = async () => {
        const fetchedData =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=8.715017999999999&lng=77.765628&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await fetchedData.json();
        setResLists(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredResLists(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return (resLists.length === 0) ? <ShimmerComponent/> :(
        <div className="m-3">
            <div className="flex justify-between">
                <div className="m-5">
                    <input type="text" id="search" value={searchButton} onChange={(b)=> setSearchButton(b?.target?.value)}
                    className="appearance-none border-0 border-b border-black focus:border-blue-500 focus:outline-none focus:ring-0 rounded-none px-2 py-1"/>
                        <button
                        onClick={
                            () => {
                                console.log("Clicked", searchButton);
                                const lists = resLists.filter((val) => {
                                    return val?.info?.name?.toLowerCase().includes(searchButton.toLowerCase());
                                });
                                console.log(lists);
                                setFilteredResLists(lists);
                            }
                        }
                        className="w-20 h-8 ml-1 rounded-2xl uppercase font-normal cursor-pointer bg-blue-300 shadow-4xl">Search</button> 
                </div>
                <div className="m-5 p-2">
                    <input type="text" id="typeValue" onChange= {(e) => setUserNameUpdate(e.target.value)} className="p-2 bg-blue-200"/>
                </div>
                <button
                    onClick={() => {
                        const filteredResList = resLists.filter((res) => res?.info?.avgRating > 4.5);
                            setResLists(filteredResList);
                            setFilteredResLists(filteredResList);
                        }
                    }
                className="w-50 h-10 bg-emerald-500 m-2 rounded-2xl cursor-pointer" > Filter High Rating Foods
                </button>
            </div>
            <div className="flex flex-wrap flex-row py-3 px-5">
                {   
                    filteredResLists.map((res) => (
                        <Link to={"/restaurant/"+ res?.info?.id} style={{ textDecoration: 'none' }} key={res?.info?.id}>
                            {
                                (res?.info?.avgRating > 4.4) ? <PromotedLabelFunction resData = {res}/> : <CardComponent resData = {res}/>
                            }
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default BodyComponent;
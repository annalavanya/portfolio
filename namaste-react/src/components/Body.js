import  CardComponent from "./RestraurantCard";
import { useEffect, useState } from "react";
import ShimmerComponent from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utility/useOnlineStatus";

const BodyComponent = () => {
    const [resLists, setResLists] = useState([]);

    const [filteredResLists, setFilteredResLists] = useState([]);

    const [searchButton, setSearchButton] = useState('');

    // useEffect
    useEffect(()=> {
        getFetchedData();
    }, []);

    if(useOnlineStatus() === false) return <h1>You are in Offline!!!</h1>;

    const getFetchedData = async () => {
        const fetchedData =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=8.715017999999999&lng=77.765628&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await fetchedData.json();
        setResLists(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredResLists(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return (resLists.length === 0) ? <ShimmerComponent/> :(
        <div className="body">
            <div className="res-filter">
                <div className="search-filter">
                    <input type="text" id="search" value={searchButton} onChange={(b)=> setSearchButton(b?.target?.value)}/>
                    <button className="search-btn"
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
                    >Search</button>
                </div>
                <button className="filter-btn" 
                    onClick={() => {
                        const filteredResList = resLists.filter((res) => res?.info?.avgRating > 4.2);
                            setResLists(filteredResList);
                            setFilteredResLists(filteredResList);
                        }
                    }
                > Filter High Rating Foods
                </button>
            </div>
            <div className="container">
                {   
                    filteredResLists.map((res) => (
                        <Link to={"/restaurant/"+ res?.info?.id}  style={{ textDecoration: 'none' }} key={res?.info?.id}><CardComponent resData = {res}/></Link>
                    ))
                }
            </div>
        </div>
    );
};

export default BodyComponent;
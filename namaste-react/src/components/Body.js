import  CardComponent from "./RestraurantCard";
import { useEffect, useState } from "react";
import axios from 'axios';
import ShimmerComponent from "./Shimmer";

const BodyComponent = () => {
    const [resLists, setResLists] = useState([]);

    const [filteredResLists, setFilteredResLists] = useState([]);

    const [searchButton, setSearchButton] = useState('');

    // useEffect
    useEffect(()=> {
        getFetchedData();
    }, []);

    const getFetchedData = async () => {
        const fetchedData =  await axios.get("http://localhost:3000/product");
        setResLists(fetchedData?.data?.data);
        setFilteredResLists(fetchedData?.data?.data);
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
                                return val.resName.toLowerCase().includes(searchButton.toLowerCase());
                            });
                            console.log(lists);
                            setFilteredResLists(lists);
                        }
                    }
                    >Search</button>
                </div>
                <button className="filter-btn" 
                    onClick={() => {
                        const filteredResList = resLists.filter((res) => res.ratings > 4);
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
                        <CardComponent key={res.id} resData = {res}/>
                    )) 
                }
            </div>
        </div>
    );
};

export default BodyComponent;
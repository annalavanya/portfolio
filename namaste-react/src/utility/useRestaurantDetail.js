import { useState, useEffect } from "react";
import { RES_DETAILS } from "../utility/constants";

const useRestaurantDetail = (resId) => {
    const [resDetails, setResDetails] = useState(null);

    useEffect(() => {
        getResDetailsFromBackend();
    }, []);

    const getResDetailsFromBackend = async () => {
        const data = await fetch(RES_DETAILS + resId);
        const json = await data.json();
        setResDetails(json?.data?.cards);
    };

    return resDetails;
}

export default useRestaurantDetail;
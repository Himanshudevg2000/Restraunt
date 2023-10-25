import RestrauntCard from "./RestraunrCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfRestraunts, setListOfRestraunts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        const updatedata = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setListOfRestraunts(updatedata)
    }

    // Conditional rendering
    if (listOfRestraunts.length === 0) {
        // return <h1>Loading.....</h1>
        return <Shimmer />
    }

    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestraunts?.filter((res) => res.info.avgRating > 4.2);
                        setListOfRestraunts(filteredList);
                    }}>
                    Top Rated Restraunt
                </button>
            </div>
            <div className="res-container">
                {
                    listOfRestraunts?.map((restraunt) => (
                        <RestrauntCard
                            key={restraunt?.info.id}
                            resData={restraunt?.info} />
                    ))
                }
            </div>
        </div>
    )
};

export default Body;
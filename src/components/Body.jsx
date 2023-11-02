import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {

    const [listOfRestraunts, setListOfRestraunts] = useState([]);
    const [filteredRestraunts, setFilteredRestraunts] = useState([]);
    const [searchText, setSearchText] = useState();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        const updatedata = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setListOfRestraunts(updatedata);
        setFilteredRestraunts(updatedata);
    }

    // Conditional rendering
    if (listOfRestraunts.length === 0) {
        // return <h1>Loading.....</h1>
        return <Shimmer />
    }

    return (
        <div className="body">
            <div className="filter">

                <div className="search-div">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search..."
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value)
                        }} />
                    <button className="search-btn"
                        onClick={() => {
                            // console.log(searchText)
                            const filteredRestaurant =
                                listOfRestraunts?.filter((res) =>
                                    // res.info.name.includes(searchText)
                                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                                )
                            setFilteredRestraunts(filteredRestaurant)
                        }}
                    >Search</button>
                </div>

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
                    filteredRestraunts?.map((restraunt) => (
                        <Link className="res-link" to={`/restraunt/${restraunt?.info.id}`}>
                            <RestrauntCard
                                key={restraunt?.info.id}
                                resData={restraunt?.info} />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
};

export default Body;
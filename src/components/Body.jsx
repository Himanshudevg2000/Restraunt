import RestrauntCard from "./RestrauntCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestrauntList from "../utils/useRestrauntList";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    // const [listOfRestraunts, setListOfRestraunts] = useState([]);
    // const [filteredRestraunts, setFilteredRestraunts] = useState([]);
    const [searchText, setSearchText] = useState();

    const listOfRestraunts = useRestrauntList();
    // setFilteredRestraunts(listOfRestraunts);
    console.log('listOfRestraunts: ', listOfRestraunts);

    // Conditional rendering
    if (listOfRestraunts.length === 0) {
        // return <h1>Loading.....</h1>
        return <Shimmer />
    }

    // const onlineStatus = useOnlineStatus();
    // console.log('onlineStatus: ', onlineStatus);
    // if(onlineStatus === false){
    //     return <h1>Looks like you are offline</h1>
    // }

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
                            // setFilteredRestraunts(filteredRestaurant)
                        }}
                    >Search</button>
                </div>

                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestraunts?.filter((res) => res.info.avgRating > 4.2);
                        // setListOfRestraunts(filteredList);
                    }}>
                    Top Rated Restraunt
                </button>
            </div>
            <div className="res-container">
                {
                    listOfRestraunts?.map((restraunt) => (
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
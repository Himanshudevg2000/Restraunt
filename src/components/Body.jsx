import RestrauntCard from "./RestraunrCard";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body = () => {

    const [listOfRestraunts, setListOfRestraunts] = useState(resObj.restaurants);

    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestraunts.filter((res) => res.info.avgRating > 4.2);
                        setListOfRestraunts(filteredList);
                    }}>
                    Top Rated Restraunt
                </button>
            </div>
            <div className="res-container">
                {/* {console.log(listOfRestraunts)} */}
                {
                    listOfRestraunts.map((restraunt) => (
                        <RestrauntCard
                            key={restraunt.info.id}
                            resData={restraunt.info} />
                    ))
                }
                {/* <RestrauntCard /> */}
            </div>
        </div>
    )
};

export default Body;
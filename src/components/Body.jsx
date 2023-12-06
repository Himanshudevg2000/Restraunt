import RestrauntCard, { withDiscountLabel } from "./RestrauntCard";
import { useContext, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestrauntList from "../utils/useRestrauntList";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  //   const [listOfRestraunts, setListOfRestraunts] = useState([]);
  //   const [filteredRestraunts, setFilteredRestraunts] = useState([]);
  const [searchText, setSearchText] = useState();
  const onlineStatus = useOnlineStatus();

  const RestrauntCardDiscount = withDiscountLabel(RestrauntCard);

  const listOfRestraunts = useRestrauntList();
  // setFilteredRestraunts(listOfRestraunts);
  // console.log("listOfRestraunts: ", listOfRestraunts);
  // console.log("listOfRestraunts: ", listOfRestraunts[1].info.aggregatedDiscountInfoV3.header);

  // Conditional rendering
  if (listOfRestraunts.length === 0) {
    // return <h1>Loading.....</h1>
    return <Shimmer />;
  }

  console.log("onlineStatus: ", onlineStatus);
  if (onlineStatus === false) {
    return <h1>Looks like you are offline</h1>;
  }

  const { loggedInUser ,setUserName} = useContext(UserContext)

  return (
    <div className="body">
      <div className="filter flex items-center ">
        <div className=" ">
          <input
            type="text"
            className="m-6 p-2 border w-56"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className=" bg-gray-200 px-4 py-2 rounded-2xl "
            onClick={() => {
              // console.log(searchText)
              const filteredRestaurant = listOfRestraunts?.filter((res) =>
                // res.info.name.includes(searchText)
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              //   setFilteredRestraunts(filteredRestaurant)
            }}
          >
            Search
          </button>
        </div>

        <div className=" m-4 ">
          <button
            className=" bg-black text-gray-50 px-4 py-2 rounded-2xl "
            onClick={() => {
              const filteredList = listOfRestraunts?.filter(
                (res) => res.info.avgRating > 4.2
              );
              //   setListOfRestraunts(filteredList);
            }}
          >
            Top Rated Restraunt
          </button>
        </div>

        <div className="m-2">
          <label htmlFor="User">UserName: </label>
            <input type="text" className="border border-black p-2" value={loggedInUser} onChange={(e)=> setUserName(e.target.value)} />
        </div>

      </div>
      <div className="flex flex-wrap">
        {listOfRestraunts?.map((restraunt) => (
          <Link className="res-link" to={`/restraunt/${restraunt?.info.id}`}>
            {restraunt?.data?.aggregatedDiscountInfoV3?.header ? (
              <RestrauntCardDiscount resData={restraunt} />
            ) : (
              <RestrauntCard
                key={restraunt?.info.id}
                resData={restraunt?.info}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestrauntCardById = () => {
  const [restrauntName, setRestrauntName] = useState();

  const { id } = useParams();
  console.log(id)

  const fetchData = async () => {
    try {
      const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
      const json = await data.json();
      setRestrauntName(json);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData()
  }, []);
  console.log("restrauntName data:", restrauntName);
  // const { name, costForTwoMessage, avgRating } = restrauntName?.data?.cards[0]?.card?.card?.info;

  return (
    <div>
      {/* {console.log(restrauntName?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards[0]?.card?.info?.name)} */}
      {/* [4]?.card?.card?.itemCards[0]?.card?.info?.name */}

      <h1>{restrauntName?.data?.cards[0]?.card?.card?.info.name}</h1>
      <h3>{restrauntName?.data?.cards[0]?.card?.card?.info.costForTwoMessage}</h3>
      <h3>{restrauntName?.data?.cards[0]?.card?.card?.info.avgRating}</h3>

      <h2>Menu</h2>

      <ul>
        {(restrauntName?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
          restrauntName?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
          restrauntName?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards || []
        ).map((card, index) => (
          <li key={index}>
            {card?.card?.card?.itemCards?.[0]?.card?.info?.name} -{" "}
            {((card?.card?.card?.itemCards?.[0]?.card?.info?.price) || 0) / 100} Rs
          </li>
        ))}
      </ul>


    </div>
  )
}

export default RestrauntCardById;
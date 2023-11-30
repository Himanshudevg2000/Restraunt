import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestrauntMenu from "../utils/useRestrauntMenu";

const RestrauntCardById = () => {
  const { id } = useParams();
  const restrauntName = useRestrauntMenu(id);
  // console.log("restrauntName: ", restrauntName);

  if (!restrauntName) return <Shimmer />;

  const categories =
    restrauntName?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log("categories: ", categories);

  return (
    <div className=" m-4 p-14 w-[450px] bg-gray-100 items-center text-center">
      <h1 className=" font-bold ">
        {restrauntName?.data?.cards[0]?.card?.card?.info.name}
      </h1>
      <h3 className="text-red-600">
        {restrauntName?.data?.cards[0]?.card?.card?.info.costForTwoMessage}
      </h3>
      <h3>{restrauntName?.data?.cards[0]?.card?.card?.info.avgRating}</h3>

      <h2 className="font-bold text-3xl">Menu</h2>

      {<h2 className=" font-bold text-2xl">Best seller Items</h2>}
      <ul>
        {(
          restrauntName?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c) =>
              c?.card?.cards?.["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          ) || []
        ).map((card, index) => (
          <li key={index}>
            {card?.card?.card?.itemCards?.[0]?.card?.info?.name} -{" "}
            {(card?.card?.card?.itemCards?.[0]?.card?.info?.price || 0) / 100}{" "}
            Rs
          </li>
        ))}
      </ul>

      {/* {<h2 className=" font-bold text-2xl">Best seller Items</h2>}
      <ul>
        {restrauntName?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
        (
          restrauntName?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
            ?.cards ||
          restrauntName?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR
            ?.cards ||
          []
        ).map((card, index) => (
          <li key={index}>
            {card?.card?.card?.itemCards?.[0]?.card?.info?.name} -{" "}
            {(card?.card?.card?.itemCards?.[0]?.card?.info?.price || 0) / 100}{" "}
            Rs
          </li>
        ))}
      </ul> */}

      {/* {<h2 className=" font-bold text-2xl">Recommended Items </h2>}
      <ul>
        {
        (
          restrauntName?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
            ?.cards ||
          []
        ).map((card, index) => (
          <li key={index}>
            
            {card?.card?.card?.itemCards?.[2]?.card?.info?.name}
          </li>
        ))}
      </ul> */}

      {/* {<h2 className=" font-bold text-2xl">Party Packs Items</h2>}
      <ul>
        {
        (
          restrauntName?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
            ?.cards ||
          []
        ).map((card, index) => (
          <li key={index}>
            {card?.card?.card?.itemCards?.[3]?.card?.info?.name}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestrauntCardById;

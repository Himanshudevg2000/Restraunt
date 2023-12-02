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
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );

  console.log("categories: ", categories);

  const name = restrauntName?.data?.cards[0]?.card?.card?.info.name;
  const costForTwoMessage = restrauntName?.data?.cards[0]?.card?.card?.info.costForTwoMessage;
  const cuisines = restrauntName?.data?.cards[0]?.card?.card?.info.cuisines;
  const avgRating = restrauntName?.data?.cards[0]?.card?.card?.info.avgRating

  return (
    <div className=" mx-60 my-5 p-14 bg-gray-100 items-center text-center">
      <h1 className=" font-bold text-xl ">
        {name}
      </h1>
      <h3 className="font-bold text-l">
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <h3>{avgRating}</h3>

      <h2 className="font-bold text-3xl">Menu</h2>
      {categories.map(()=> { })}
    </div>
  );
};

export default RestrauntCardById;

import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import RestrauntCategory from "./RestrauntCategory";
import { useState } from "react";

const RestrauntCardById = () => {
  const { id } = useParams();
  const restrauntName = useRestrauntMenu(id);
  console.log("restrauntName: ", restrauntName);

  const [showIndex, setShowIndex] = useState(null);

  if (!restrauntName) return <Shimmer />;

  const categories =
    restrauntName?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );

  // console.log("categories: ", categories);

  const restrauntdata = restrauntName?.data?.cards[2]?.card?.card?.info;
  console.log('restrauntdata: ', restrauntdata);

  return (
    <div className=" mx-60 my-5 p-14 items-center text-center">
      <h1 className=" font-bold text-3xl ">
        {restrauntdata?.name}
      </h1>
      <h3 className="font-bold text-xl">
        {restrauntdata.cuisines.join(", ")} - {restrauntdata.costForTwoMessage}
      </h3>
      <h3 className="font-bold text-ll">{restrauntdata.avgRating}-Rating</h3>

      <h2 className="font-bold text-xl">Menu</h2>
      {categories.map((category,index) => (
        <RestrauntCategory 
        key={index} 
        resdata={category?.card?.card} 
        showItems={ index === showIndex ? true: false }
        setShowIndex = {()=> setShowIndex(index)}
        />
      ))}

    </div>
  );
};

export default RestrauntCardById;

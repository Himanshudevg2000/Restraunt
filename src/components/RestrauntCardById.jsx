import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestrauntMenu from "../utils/useRestrauntMenu";

const RestrauntCardById = () => {
  const { id } = useParams();
  const restrauntName = useRestrauntMenu(id);

  if (!restrauntName) return <Shimmer />;

  return (
    <div>
      <h1>{restrauntName?.data?.cards[0]?.card?.card?.info.name}</h1>
      <h3>
        {restrauntName?.data?.cards[0]?.card?.card?.info.costForTwoMessage}
      </h3>
      <h3>{restrauntName?.data?.cards[0]?.card?.card?.info.avgRating}</h3>

      <h2>Menu</h2>

      <ul>
        {(
          restrauntName?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR
            ?.cards ||
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
      </ul>
    </div>
  );
};

export default RestrauntCardById;

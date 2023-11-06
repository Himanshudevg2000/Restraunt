import { useEffect, useState } from "react";
import { RESTRAUNT_LIST } from "./constants";

const useRestrauntList = () => {
  const [listOfRestraunts, setListOfRestraunts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTRAUNT_LIST);
    const json = await data.json();
    const updatedata =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestraunts(updatedata);
  };

  return listOfRestraunts;
};

export default useRestrauntList;

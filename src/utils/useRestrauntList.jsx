import { useEffect, useState } from "react";
import { RESTRAUNT_LIST } from "./constants";

const useRestrauntList = () => {
  const [listOfRestraunts, setListOfRestraunts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch(RESTRAUNT_LIST);
    const CORS_PROXY = "https://api.allorigins.win/raw?url=";
    const data = await fetch(`${CORS_PROXY}${encodeURIComponent(RESTRAUNT_LIST)}`);
    // console.log('data: ', data);
    const json = await data.json();
    // console.log('json: ', json);
    const updatedata = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    // console.log("updatedata: ", updatedata);
    setListOfRestraunts(updatedata);
  };

  return listOfRestraunts;
};

export default useRestrauntList;

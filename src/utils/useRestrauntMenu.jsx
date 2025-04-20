import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestrauntMenu = (id) => {
  const [resInfo, setResInfo] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch(MENU_API + id);
    const CORS_PROXY = "https://api.allorigins.win/raw?url=";
    const data = await fetch(`${CORS_PROXY}${encodeURIComponent(MENU_API + id)}`);
    const json = await data.json();
    setResInfo(json);
  };

  return resInfo;
};

export default useRestrauntMenu;

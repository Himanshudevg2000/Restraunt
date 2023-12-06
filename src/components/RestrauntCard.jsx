import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestrauntCard = (props) => {
    const { resData } = props;
    const {loggedInUser} = useContext(UserContext)

    const {
        id,
        name,
        costForTwo,
        avgRating,
        cuisines,
        cloudinaryImageId,
        aggregatedDiscountInfoV3
    } = resData
    return (
        <div className="m-4 p-4 w-[200px] bg-red-50 rounded-2xl hover:bg-red-100">
            <h4 className=" m-1 p-2 bg-gray-200 rounded-2xl ">{aggregatedDiscountInfoV3?.header}</h4>
            <img className=" rounded-lg " alt="logo" src={`${CDN_URL}${cloudinaryImageId}`}></img>
            <h3 className="font-bold py-2 text-l">{name}</h3>
            <h4>{costForTwo}</h4>
            <h4>{avgRating}</h4>
            <h4>{cuisines.join(", ")}</h4>
            {/* <h4>User: {loggedInUser}</h4> */}
        </div>
    )
};


export const withDiscountLabel = (RestrauntCard) => {
    return (props) => {
        return (
            <div>
                <label>Promoted</label>
                <RestrauntCard {...props} />
            </div>
        )
    }
}


export default RestrauntCard;
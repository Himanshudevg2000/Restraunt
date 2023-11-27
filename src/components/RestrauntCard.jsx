import { CDN_URL } from "../utils/constants";

const RestrauntCard = (props) => {
    const { resData } = props;

    const {
        id,
        name,
        costForTwo,
        avgRating,
        cuisines,
        cloudinaryImageId
    } = resData
    return (
        <div className="m-4 p-4 w-[200px] bg-red-50 rounded-2xl hover:bg-red-100">
            <img className=" rounded-lg " alt="logo" src={`${CDN_URL}${cloudinaryImageId}`}></img>
            <h3 className="font-bold py-2 text-l">{name}</h3>
            <h4>{costForTwo}</h4>
            <h4>{avgRating}</h4>
            <h4>{cuisines.join(", ")}</h4>

        </div>
        // <>
        //     {mapResult}
        // </>
    )
};

export default RestrauntCard;
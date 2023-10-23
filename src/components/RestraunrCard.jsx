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
        <div className="res-card">
            <img className="res-logo" alt="logo" src={`${CDN_URL}${cloudinaryImageId}`}></img>
            <h3>{name}</h3>
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
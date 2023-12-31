import { useDispatch } from "react-redux"
import { CDN_URL } from "../utils/constants"
import { addItem } from "../utils/cartSlice" 

const ItemList = ({ items }) => {
    // console.log("items", items)
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item)); 
        console.log(item);
    }


    return (
        <div>
            <div>
                {items?.map((item) => (
                    <div key={item?.id} className=" px-4 py-2 m-2 text-left">
                        <h1 className="font-bold text-lg ">{item?.title} -{`(${item?.itemCards?.length})`}</h1>
                        <div className="">
                            {item?.itemCards?.map((itemList) => (
                                <div key={itemList?.card?.info?.id} className="mx-2 my-2 py-3 border-gray-200 border-b-2 text-left flex justify-between">
                                    <div className=" w-10/12">
                                        <span className="font-bold text-l">{itemList?.card?.info?.name}</span>
                                        <br />
                                        <span className="text-m">
                                            ₹{(itemList?.card?.info?.price || itemList?.card?.info?.defaultPrice) / 100}</span>
                                        <p className="text-xs">{itemList?.card?.info?.description}</p>
                                    </div>
                                    <div className="w-2/12">

                                        <div className="absolute">
                                            <button className="mx-16 text-white bg-black px-2 rounded-xl hover:shadow-lg" onClick={() => handleAddItem(itemList)}>
                                                Add+
                                            </button>
                                        </div>

                                        <img className=" rounded-lg w-32 h-fit" alt="logo" src={`${CDN_URL}${itemList?.card?.info?.imageId}`}></img>

                                    </div>
                                </div>
                            )
                            )}
                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default ItemList
import ItemList from "./ItemList"

const RestrauntCategory = ({ resdata, showItems, setShowIndex }) => {
  // console.log(resdata)

  // const [showItems, setShowItems] = useState(false);

  const handleClick = async() => {
    // console.log("clicked");
    // setShowItems(!showItems);
    setShowIndex();
  };


  return (
    // <div className='m-2 px-2 py-6 bg-zinc-200'>
    <div className=' mx-auto my-4 p-4 bg-zinc-50 shadow-lg ' >
      <div className="flex justify-between cursor-pointer "  onClick={handleClick}>
        <span className="font-bold text-xl">{resdata?.title} - ({resdata?.categories?.length}) </span>
        <span className="">◀</span>
      </div>

      {showItems && <ItemList items={resdata.categories} />}
    </div>
  )
}

export default RestrauntCategory;
import ItemList from "./ItemList"

const RestrauntCategory = ({ resdata }) => {
  // console.log(resdata)
  return (
    // <div className='m-2 px-2 py-6 bg-zinc-200'>
    <div className=' mx-auto my-4 p-4 bg-zinc-50 shadow-lg'>
      <div className="flex justify-between">
        <span className="font-bold text-xl">{resdata?.title} - ({resdata?.categories?.length}) </span>
        <span>◀</span>
      </div>
      <ItemList items={resdata.categories} />
    </div>
  )
}

export default RestrauntCategory;
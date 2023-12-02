const RestrauntCategory = ({resdata}) => {
  return (
    // <div className='m-2 px-2 py-6 bg-zinc-200'>
    <div className=' mx-auto my-4 p-4 bg-zinc-50 shadow-lg flex justify-between'>
      <span>{resdata.title} </span>
      <span>◀</span>
    </div>

  )
}

export default RestrauntCategory;
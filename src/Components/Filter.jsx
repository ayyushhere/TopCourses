
const Filter = (props) => {
    let filterData = props.filterData;
  return (
    <div className="flex gap-4 justify-center m-5">
        {
            filterData.map((data) => {
                return <button key={data.id} className={`
            text-lg p-5 rounded-md bg-black border-white border-2 bg-opacity-60 hover:bg-gray-800 text-white transition-all duration-300 ease-in-out font-medium cursor-pointer`}
                >{data.title} </button>;
            })
        }
    </div>
  )
}

export default Filter

const Filter = (props) => {
    let filterData = props.filterData;
  return (
    <div className="flex gap-4 justify-center m-5">
        {
            filterData.map((data) => {
                return <button key={data.id} className={`
            text-lg px-2 py-1 rounded-md bg-black border-2 bg-opacity-60 hover:bg-opacity-50 text-white transition-all duration-300 font-medium`}
                >{data.title} </button>;
            })
        }
    </div>
  )
}

export default Filter
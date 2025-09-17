import React from "react";



const Filter = (props) => {
    let category = props.category;
    let setCategory = props.setCategory;
    let filterData = props.filterData;

    function filterHandler(title){
        setCategory(title);
    }

    return (
        <div className="flex gap-4 justify-center m-5">
            {
                filterData.map((data) => {
                    return <button key={data.id} className={`
            text-lg p-5 rounded-md bg-black border-2 hover:bg-gray-800 text-white transition-all duration-300 ease-in-out font-medium cursor-pointer ${category === data.title ? "bg-opacity-60 border-white" : "bg-opacity-48 border-transaparent"}`} 
             onClick={() => filterHandler(data.title)}
                    >{data.title} </button>;
                })
            }
        </div>
    )
}

export default Filter
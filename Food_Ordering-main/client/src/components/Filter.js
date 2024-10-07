import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterPizzas } from "../actions/pizzaActions";
export default function Filter() {
    const dispatch = useDispatch()
    const[searchkey , setsearchkey] = useState('')
    const[category , setcategory] = useState('all')
    return (
        <div className='container' >
            <div className="flex space-between justify-center items-center shadow-lg p-3 bg-[#344349] outline-[#27363c]  w-100 mb-5    rounded-full">

                    <div className=" m-auto ">
                      <input
                      onChange={(e)=>{setsearchkey(e.target.value)}}
                      value={searchkey} type="text" className="form-control w-100" placeholder="search pizzas"/>
                    </div>
                    <div className="">
                        <select className="form-control  mt-2" value={category} onChange={(e)=>setcategory(e.target.value)}>
                            <option value="all">All</option>
                            <option value="small">small</option>
                            <option value="veg">Veg</option>
                            <option value="nonveg">Non Veg</option>
                        </select>
                    </div>
                    <div className="m-auto bg-orange-600 hover:bg-orange-500 rounded-full">
                       <button className='  btn m-auto p-auto' onClick={()=>{dispatch(filterPizzas(searchkey , category))}}>FILTER</button>
                    </div>

            </div>
        </div>
    )
}

import { useEffect, useState } from "react";
import ToyCard from "./ToyCard";
import './AllToy.css'

const AllToy = () => {

    const [AllToys, setAllToys] = useState([]);

    useEffect(()=>{
        fetch('https:toy-marketplace-server-chi.vercel.app/allToy')
        .then(res => res.json())
        .then(data => setAllToys(data))
    },[])

    return (
        <div className="overflow-x-auto">
      <table className="table w-full">
        {/* head */}
        <thead>
          <th>toyName</th>
          <th>Seller</th>
          <th>subCategory</th>
          <th>price</th>
          <th>Quantity</th>
        </thead>
      {
         AllToys.map(allToy =><ToyCard
         key={allToy._id}
         allToy={allToy}
         ></ToyCard>) 
      }
      </table>
    </div>
    );
};

export default AllToy

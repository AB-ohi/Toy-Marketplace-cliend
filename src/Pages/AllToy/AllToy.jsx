import { useEffect, useState } from "react";
import ToyCard from "./ToyCard";
import './AllToy.css'

const AllToy = () => {

    const [AllToys, setAllToys] = useState([]);

    useEffect(()=>{
        fetch('https://toy-marketplace-server-chi.vercel.app/allToy')
        .then(res => res.json())
        .then(data => setAllToys(data))
    },[])

    return (
        <div className=" rounded-lg">
            {
               AllToys.map(allToy =><ToyCard
               key={allToy._id}
               allToy={allToy}
               ></ToyCard>) 
            }
        </div>
    );
};

export default AllToy
import { useState } from "react";
import MyToyCard from "./MyToyCard";

const MyToy = () => {
    const [myToys, setMyToys] = useState([]);

    fetch('http://localhost:5000/addToy')
    .then(res => res.json())
    .then(data => setMyToys(data))
    return (
        <div className="grid md:grid-cols-3 justify-center">
            {
                myToys.map(myToy =><MyToyCard
                key={myToy._id}
                myToy ={myToy}
                ></MyToyCard>)
            }
        </div>
    );
};

export default MyToy;
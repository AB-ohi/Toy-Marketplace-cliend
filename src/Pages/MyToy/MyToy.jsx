import { useState } from "react";

const MyToy = () => {
    const [myToys, setMyToys] = useState();

    fetch('http://localhost:5000/addToy')
    .then(res => res.json())
    .then(data => setMyToys(data))
    return (
        <div>
            {
                myToys.map(myToy =>{<p>{myToy.length}</p>})
            }
        </div>
    );
};

export default MyToy;
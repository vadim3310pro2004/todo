import { useState } from "react";
import Wave from "./Wave";

const randomBoxShadow = () => `0 0 100px rgb(${Math.round(Math.random()*155+100)}, ${Math.round(Math.random()*155+100)}, ${Math.round(Math.random()*155+100)})`;

const Background = props => {
    const { waves } = props;
    const [boxShadow, setBoxShadow] = useState(randomBoxShadow())
    setInterval(() => {
        setBoxShadow(randomBoxShadow())
    }, 2000)
    return (
        <>
        {waves.map((item, id) => ( <Wave key={id} color={item} /> ))}
        <div className="chebur-logo">
            <img src="imgs/clown.jpg" alt="cat clown" style={{boxShadow: boxShadow}} />
        </div>
        </>
    );
}

export default Background;
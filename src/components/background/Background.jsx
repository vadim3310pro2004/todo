import { useState } from "react";
import { useSelector } from "react-redux";
import Wave from "./Wave";

const randomBoxShadow = () => `0 0 80px rgb(${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)})`;

const Background = props => {
    const waves = useSelector(state => state.waves);

    const [boxShadow, setBoxShadow] = useState(randomBoxShadow());
    setInterval(() => {
        setBoxShadow(randomBoxShadow());
    }, 4000)

    return (
        <>
        {waves.map((item, id) => ( <Wave key={id} color={item} /> ))}
        <div className="background-image-wrapper">
            <img src="imgs/clown.jpg" alt="cat clown" style={{boxShadow: boxShadow}} />
        </div>
        </>
    );
}

export default Background;
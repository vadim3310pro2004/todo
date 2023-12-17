import Wave from "./Wave";


const Background = props => {
    const { waves } = props;
    const wavesArray = new Array(waves).fill();
    return (
        <>
        {wavesArray.map((item, id) => ( <Wave key={id} /> ))}
        <div className="chebur-logo">
            <img src="imgs/clown.jpg" alt="cat clown" />
        </div>
        </>
    );
}

export default Background;
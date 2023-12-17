import Wave from "./Wave";


const Background = props => {
    const { waves } = props;
    return (
        <>
        {waves.map((item, id) => ( <Wave key={id} color={item} /> ))}
        <div className="chebur-logo">
            <img src="imgs/clown.jpg" alt="cat clown" />
        </div>
        </>
    );
}

export default Background;
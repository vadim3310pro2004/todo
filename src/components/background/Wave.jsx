
const Wave = (props) => {
    const { color } = props;
    // console.log(color)
    return (
        <div className="wave" style={{borderColor: color}}></div>
    );
}

export default Wave;
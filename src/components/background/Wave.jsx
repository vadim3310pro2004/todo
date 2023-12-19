
const Wave = props => {
    const { color } = props;

    return (
        <div className="wave" style={{borderColor: color}}></div>
    );
}

export default Wave;
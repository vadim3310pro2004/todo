const randomColor = () => `rgb(${Math.round(Math.random()*155+100)}, ${Math.round(Math.random()*155+100)}, ${Math.round(Math.random()*155+100)})`;

const Wave = () => (
    <div className="wave" style={{borderColor: randomColor()}}></div>
)

export default Wave;
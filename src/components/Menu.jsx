
const Menu = (props) => {
    const clases = props.isShow? '': 'burger-menu_hiden';

    return (
        <div className={`burger-menu ${clases}`}>
            <ul>
                <li className="big-li">
                    contact me
                </li>   
                <li>
                    <a href="https://www.instagram.com/vadymmmmmm" target="_blank">
                        <img src="imgs\instagram.svg" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://t.me/kkkppip" target="_blank">
                        <img src="imgs\telegram.svg" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/vadim3310pro2004" target="_blank">
                        <img src="imgs\github.svg" alt="" />
                    </a>
                </li>
                
                <li className="big-li" style={{textAlign: "center"}}>
                    +380 67 459 03 88
                </li>
                <li className="big-li">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit amet voluptatem neque itaque dolor quis dolore, soluta illo quo esse saepe a! Quod, deleniti vel aperiam doloribus quaerat sequi dicta.
                </li>
            </ul>
        </div>
    );
}

export default Menu;
import { useState } from "react";
import Menu from "./Menu";
import BurgerButton from "./BurgerButton";
import Todo from "./Todo";

const Nav = (props) => {
    const [showMenu, setShowMenu] = useState(false);
    const burgerButtonHandleClick = event => setShowMenu(!showMenu);
    const { addWave, removeWave } = props;
    return (
        <nav>
            <Todo addWave={addWave} removeWave={removeWave} />
            <BurgerButton onClick={burgerButtonHandleClick}/>
            <Menu isShow={showMenu} />
        </nav>
    );
};

export default Nav;
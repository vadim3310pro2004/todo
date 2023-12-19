import { useState } from "react";
import Menu from "./Menu";
import BurgerButton from "./BurgerButton";
import Todo from "./Todo";

const Nav = props => {
    const [showMenu, setShowMenu] = useState(false);
    const burgerButtonHandleClick = event => setShowMenu(!showMenu);

    return (
    <nav>
        <Todo />
        <BurgerButton onClick={burgerButtonHandleClick}/>
        <Menu isShow={showMenu} />
    </nav>
    );
};

export default Nav;
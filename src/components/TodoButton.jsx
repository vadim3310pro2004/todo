
const TodoButton = (props) => {
    const { onClick } = props;

    return (
        <div className="nav-button-wrapper" onClick={onClick}>
            <div className="menu-button">
                <img src="imgs/todo.svg" alt=""/>
            </div>
        </div>
    );
};

export default TodoButton;
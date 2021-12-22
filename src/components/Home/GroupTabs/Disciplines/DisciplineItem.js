import Disciplines from "./Disciplines"
import Button from "../../../UI/Button/Button"
import classes from "./DisciplineItem.module.css"

const DisciplineItem = (props) => {
    return (
        <div id={classes.item}>
            <h2 className={classes.title}>{props.name}</h2>
            <button className={classes.button} onClick={()=>props.removeItem(props.id)}>-</button>
        </div>
    )
}

export default DisciplineItem;
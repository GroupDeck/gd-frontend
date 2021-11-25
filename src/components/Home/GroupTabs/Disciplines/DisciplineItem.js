import Disciplines from "./Disciplines"
import Button from "../../../UI/Button/Button"

const DisciplineItem = (props) => {
    return (
        <div style={{border:"red solid 2px", display:"inline-flex", width:"100%"}}>
            <h2>{props.name}</h2>
            <p>{props.descr}</p>
            <button onClick={()=>props.removeItem(props.id)} style={{position:"relative", float:"right"}}>-</button>
        </div>
    )
}

export default DisciplineItem;
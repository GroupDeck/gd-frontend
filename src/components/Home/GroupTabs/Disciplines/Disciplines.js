import Modal from "../../../UI/Modal/Modal";
import DisciplineItem from "./DisciplineItem";
import Button from "../../../UI/Button/Button";
import { useRef, useContext } from "react";
import { v4 as uuidv4 } from 'uuid';
import DiscContext from "../../../../store/disc-context";

const Disciplines = (props) => {
    const discCtx = useContext(DiscContext)
    const inputRef = useRef();

    const addDiscl = () => {
        if (inputRef.current.value.trim() == '') return;
        discCtx.addDisc({id: uuidv4(),
            name: inputRef.current.value,
            color: '#' + Math.floor(Math.random()*16777215).toString(16)})
        inputRef.current.value = '';
    }

    const removeDiscl = (id) => {
        discCtx.removeDisc(id)
    }

    return (
        <Modal onClose={props.onClose}>
            <h1>
                Adauga Discipline
            </h1>
            <div>
                <input
                    ref={inputRef} />
                <Button onClick={addDiscl}>Adauga</Button>
            </div>
            <div >
                {discCtx.items.length === 0 && <p>Nu aveti nici o materia adaugata!</p>}
                {discCtx.items.length !== 0 && discCtx.items.map((item) => (
                    <DisciplineItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        removeItem={removeDiscl}
                    />
                ))}
            </div>
            <div style={{padding:"10px", position:"relative", float:"right"}}>
                <Button onClick={props.onClose}>Ok</Button>
            </div>
        </Modal>
    );
}

export default Disciplines;
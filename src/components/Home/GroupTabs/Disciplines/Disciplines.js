import Modal from "../../../UI/Modal/Modal";
import DisciplineItem from "./DisciplineItem";
import Button from "../../../UI/Button/Button";
import { useRef, useState } from "react";

const Disciplines = (props) => {
    const inputRef = useRef();
    const DUMMY_DISCIPLINES = [
        { id: 1, name: "Mate", descr: "Matematica" },
        { id: 2, name: "Romana", descr: "Romana" },
        { id: 3, name: "Info", descr: "Informatica" },
        { id: 4, name: "Engleza", descr: "Engleza" },
    ];

    const [discl, setDiscl] = useState(DUMMY_DISCIPLINES);

    const addDiscl = () => {
        setDiscl([...discl, {
            id: discl.length + 1,
            name: inputRef.current.value,
            descr: 'ttest'
        }]);
        inputRef.current.value = '';
    }

    const removeDiscl = (id) => {
        setDiscl(discl.filter(item => item.id !== id));
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
                {discl.length === 0 && <p>Nu aveti nici o materia adaugata!</p>}
                {discl.length !== 0 && discl.map((item) => (
                    <DisciplineItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        descr={item.descr}
                        removeItem={removeDiscl}
                    />
                ))}
            </div>
            <div style={{border:"red solid 1px ", padding:"10px", position:"relative", float:"right"}}>
                <Button>Ok</Button>
                <Button>Inchide</Button>
            </div>
        </Modal>
    );
}

export default Disciplines;
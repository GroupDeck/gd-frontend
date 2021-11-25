import React, { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Button from "../../UI/Button/Button";
import Disciplines from "./Disciplines/Disciplines";

const GroupSchedule = (props) => {

    const [showModal, setShowModal] = useState(false);

    const openAddDialog = () => {
        setShowModal(true);
    }

    const hideAddDialog = () => {
        setShowModal(false);
    }

    return (
        <Fragment>
           <h1> Orar </h1>
           <div>
               <Button onClick={openAddDialog}>Adauga materii</Button>
           </div>
           {showModal && <Disciplines onClose={hideAddDialog}/>}
        </Fragment>
    )
}

export default GroupSchedule;
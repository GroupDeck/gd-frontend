import React, { useState, useContext } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Button from "../../UI/Button/Button";
import Disciplines from "./Disciplines/Disciplines";
import classes from "./GroupSchedule.module.css";
import DiscContext from "../../../store/disc-context";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const GroupSchedule = (props) => {
  const [showModal, setShowModal] = useState(false);
  const discCtx = useContext(DiscContext);

  const openAddDialog = () => {
    setShowModal(true);
  };

  const hideAddDialog = () => {
    setShowModal(false);
  };

  return (
    <Fragment>
      <h1> Orar </h1>
      <DragDropContext id={classes.main}>
        <Droppable droppableId="characters" id={classes.table}>
          {(provided) => (
            <ul
              className="characters"
              {...provided.droppableProps}
              ref={provided.innerRef}
            ></ul>
          )}
        </Droppable>

        <div id={classes.discipline}>
          <Button onClick={openAddDialog}>Adauga materii</Button>
          <ul id={classes.list} className="characters">
            {discCtx.items.map((item) => {
              return (
                <Draggable key={item.id}>
                  {(provided) => <li >{item.name} </li>}
                </Draggable>
              );
            })}
          </ul>
        </div>
      </DragDropContext>
      {showModal && <Disciplines onClose={hideAddDialog} />}
    </Fragment>
  );
};

export default GroupSchedule;

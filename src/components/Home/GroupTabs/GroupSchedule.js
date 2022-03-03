import React, { useState, useContext } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Button from "../../UI/Button/Button";
import Disciplines from "./Disciplines/Disciplines";
import classes from "./GroupSchedule.module.css";
import DiscContext from "../../../store/disc-context";
import { v4 as uuid } from "uuid";
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
  const [state, setState] = useState({
    luni: [],
    marti: [],
    miercuri: [],
    joi: [],
    vineri: [],
  });

  // a little function to help us with reordering the result
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  /**
   * Moves an item from one list to another list.
   */
  const copy = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const item = sourceClone[droppableSource.index];

    destClone.splice(droppableDestination.index, 0, { ...item, id: uuid() });
    return destClone;
  };

  const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {
      src: sourceClone,
      dest: destClone,
    };

    return result;
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;
    // dropped outside the list
    if (!destination || state[destination.droppableId].length == 6) {
      return;
    }

    switch (source.droppableId) {
      case destination.droppableId:
        setState({
          ...state,
          [destination.droppableId]: reorder(
            state[source.droppableId],
            source.index,
            destination.index
          ),
        });
        break;
      case "ITEMS":
        const newState = copy(
          discCtx.items,
          state[destination.droppableId],
          source,
          destination
        );
        setState({
          ...state,
          [destination.droppableId]: newState,
        });
        break;
      default:
        const { src, dest } = move(
          state[source.droppableId],
          state[destination.droppableId],
          source,
          destination
        );
        setState({
          ...state,
          [source.droppableId]: src,
          [destination.droppableId]: dest,
        });
        break;
    }
  };

  return (
    <Fragment>
      <Button onClick={openAddDialog}>Configureaza</Button>

      <div id={classes.main}>
        <ul>
          <li>07:00</li>
          <li>08:00</li>
          <li>09:00</li>
          <li>10:00</li>
          <li>11:00</li>
          <li>12:00</li>
        </ul>

        <DragDropContext onDragEnd={onDragEnd}>
          <div id={classes.table}>
            {Object.keys(state).map(
              (list, i) =>
                <div>{state}</div> && (
                  <Droppable key={list} droppableId={list}>
                    {(provided, snapshot) => (
                      <Fragment>
                        <div
                          ref={provided.innerRef}
                          isDraggingOver={snapshot.isDraggingOver}
                          id={classes.zi}
                        >
                          <p>{list}</p>
                          {state[list].length
                            ? state[list].map((item, index) => (
                                <Draggable
                                  key={item.id}
                                  draggableId={item.id}
                                  index={index}
                                >
                                  {(provided, snapshot) => (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      isDragging={snapshot.isDragging}
                                      style={provided.draggableProps.style}
                                    >
                                      <div
                                        {...provided.dragHandleProps}
                                        id={classes.discl_item}
                                        style={{ background: `${item.color}` }}
                                      >
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M3,15H21V13H3V15M3,19H21V17H3V19M3,11H21V9H3V11M3,5V7H21V5H3Z"
                                          />
                                        </svg>
                                        {item.name}
                                      </div>
                                    </div>
                                  )}
                                </Draggable>
                              ))
                            : !provided.placeholder && (
                                <div>Drop items here</div>
                              )}
                          {provided.placeholder}
                        </div>
                      </Fragment>
                    )}
                  </Droppable>
                )
            )}
          </div>
          <Droppable droppableId="ITEMS" isDropDisabled={true}>
            {(provided, snapshot) => (
              <div
                id={classes.disciplines}
                ref={provided.innerRef}
                isDraggingOver={snapshot.isDraggingOver}
              >
                <p>Materii</p>
                {discCtx.items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <React.Fragment>
                        <span
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          isDragging={snapshot.isDragging}
                          style={provided.draggableProps.style}
                        >
                          <div
                            id={classes.discipline}
                            style={{ background: `${item.color}` }}
                          >
                            <svg width="24" height="24" viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M3,15H21V13H3V15M3,19H21V17H3V19M3,11H21V9H3V11M3,5V7H21V5H3Z"
                              />
                            </svg>
                            {item.name}
                          </div>
                        </span>
                        {snapshot.isDragging && (
                          <div
                            id={classes.discipline}
                            style={{ background: `${item.color}` }}
                          >
                            <svg width="24" height="24" viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M3,15H21V13H3V15M3,19H21V17H3V19M3,11H21V9H3V11M3,5V7H21V5H3Z"
                              />
                            </svg>
                            {item.name}
                            {item.color}
                          </div>
                        )}
                      </React.Fragment>
                    )}
                  </Draggable>
                ))}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      {showModal && <Disciplines onClose={hideAddDialog} />}
    </Fragment>
  );
};

export default GroupSchedule;

import React, { useReducer } from "react";

const DiscContext = React.createContext({
  items: [],
  disclPerDay: 0,
  addDisc: (discipline) => {},
  removeDisc: (id) => {},
});

const defaultState = {
  items: []
};

const disclReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedDisc = state.items.concat(action.item);
    return {
      items: updatedDisc,
    };
  }

  if (action.type === "REMOVE") {
    const updatedDisc = state.items.filter((e) => e.id !== action.id);
    return {
      items: updatedDisc,
    };
  }
  return defaultState;
};

export const DiscContextProvider = (props) => {
  const [discState, dispatchAction] = useReducer(disclReducer, defaultState);

  const addDiscipline = (item) => {
    dispatchAction({ type: "ADD", item: item });
  };

  const removeDiscipline = (id) => {
    dispatchAction({ type: "REMOVE", id: id });
  };

  const discCtx = {
    items: discState.items,
    addDisc: addDiscipline,
    removeDisc: removeDiscipline,
  };

  return (
    <DiscContext.Provider value={discCtx}>
      {props.children}
    </DiscContext.Provider>
  );
};

export default DiscContext;

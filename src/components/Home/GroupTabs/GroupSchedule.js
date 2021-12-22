import React, { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Button from "../../UI/Button/Button";
import Disciplines from "./Disciplines/Disciplines";
import classes from "./GroupSchedule.module.css";
import Orar from "./Schedule/Orar";
import {data, columns} from "./Schedule/OrarData"

const GroupSchedule = (props) => {
  const [showModal, setShowModal] = useState(false);

  const openAddDialog = () => {
    setShowModal(true);
  };

  const hideAddDialog = () => {
    setShowModal(false);
  };

  return (
    <Fragment>
      <h1> Orar </h1>
      <div id={classes.main}>
        <div id={classes.table}>
          <Orar columns={columns} data={data} />
          <Orar columns={columns} data={data} />
        </div>
        <div id={classes.disciplines}>
          <Button onClick={openAddDialog}>Adauga materii</Button>
        </div>
      </div>
      {showModal && <Disciplines onClose={hideAddDialog} />}
    </Fragment>
  );
};

export default GroupSchedule;

import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./Home.module.css";
import GropList from "./GroupList/GroupList";
import { Fragment } from "react/cjs/react.production.min";
import GroupHome from "./GroupHome";

const Home = (props) => {
  const [groupPageVisible, setGroupPageVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState();

  const showGroupPage = (item) => {
    setCurrentItem(item);
    setGroupPageVisible(true);
  };

  const hideGroupPage = () => {
    setCurrentItem(null);
    setGroupPageVisible(false);
  }

  return (
    <Fragment>
      {!groupPageVisible && (
        <Card className={classes.home}>
          <h1>G-Deck Management Platform</h1>
          <NavLink to='/new-group'>Create a Group</NavLink>
          <NavLink to='/join'>Join a Group</NavLink>
          <GropList openGroupItem={showGroupPage} />
        </Card>
      )}
      {groupPageVisible && <GroupHome goBack={hideGroupPage} item={currentItem}/>}
    </Fragment>
  );
};

export default Home;

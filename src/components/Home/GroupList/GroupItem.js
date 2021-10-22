import React from "react";
import Button from '../../UI/Button/Button';
import classes from './GroupItem.module.css'

const GroupItem = (props) => {

    return (
        <div className={classes.item} onClick={()=>{props.itemClicked(props.id)}}>
            <div>{props.name}</div>
            <div>{props.descritption}</div>
            <Button>...</Button>
        </div>
    );
}

export default GroupItem;
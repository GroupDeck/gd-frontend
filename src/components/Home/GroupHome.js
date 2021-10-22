import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button"; 
import { useState } from "react";
import classes from "./GroupHome.module.css";
import { Fragment } from "react/cjs/react.production.min";
import GroupSchedule from "./GroupTabs/GroupSchedule";
import Afterschool from "./GroupTabs/AfterSchool";
import HomeWork from "./GroupTabs/HomeWork";
import Extracuricular from "./GroupTabs/ExtraCuricular";
import Documents from "./GroupTabs/Documents";
import GroupChat from "./GroupTabs/GroupChat";
const GroupHome = (props) => {

    const [tabNr, setPageNr] = useState(1); 

    return (
        <Fragment>
        <Card > 
          <div>
            <div onClick={props.goBack}>^ Go Back </div>
            <h2>{props.item.name}</h2>
          </div>
          {/* className={tabNr === 1 ? `${classes.selected}` : null} */}
          <Button disabled={tabNr === 1} onClick={()=> setPageNr(1)}>Orar</Button>
          <Button disabled={tabNr === 2} onClick={()=> setPageNr(2)}>Afterschool</Button>
          <Button disabled={tabNr === 3} onClick={()=> setPageNr(3)}>Teme</Button>
          <Button disabled={tabNr === 4} onClick={()=> setPageNr(4)}>Extracuriculare</Button>
          <Button disabled={tabNr === 5} onClick={()=> setPageNr(5)}>Documente</Button>
          <Button disabled={tabNr === 6} onClick={()=> setPageNr(6)}>Chat</Button>
        </Card>

        {tabNr === 1 && <GroupSchedule />}
        {tabNr === 2 && <Afterschool />}
        {tabNr === 3 && <HomeWork />}
        {tabNr === 4 && <Extracuricular />}
        {tabNr === 5 && <Documents />}
        {tabNr === 6 && <GroupChat />}


        </Fragment>
    );
}

export default GroupHome;
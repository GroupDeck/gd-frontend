import React, { Fragment } from "react";

import GroupItem from "./GroupItem";

const groups = [
  { id: 1, name: "Group 1", descritption: "Group 1 Description" },
  { id: 2, name: "Group 2", descritption: "Group 2 Description" },
  { id: 3, name: "Group 3", descritption: "Group 3 Description" },
  { id: 4, name: "Group 4", descritption: "Group 4 Description" },
  { id: 5, name: "Group 5", descritption: "Group 5 Description" },
];

const GropList = (props) => {
  const openItem = (id) => {
    props.openGroupItem(groups.find((e) => e.id === id));
  };

  return (
    <Fragment>
      {groups.length === 0 && <p> You have no groups yet! </p>}
      {groups.length !== 0 &&
        groups.map((group) => (
          <GroupItem
            key={group.id}
            id={group.id}
            name={group.name}
            descritption={group.descritption}
            itemClicked={openItem}
          />
        ))}
    </Fragment>
  );
};

export default GropList;

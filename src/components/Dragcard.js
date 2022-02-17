import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Comp from "./Comp";
import "./Dragcard.css";
// import uuid from "uuid/v4";
// import uuidv4 from 'uuid/v4'
//import uuid from 'uuid/package.json'
// import * as uuid from 'uuid';
//import { v4 as uuidv4 } from "uuid";
//import Card1 from "./components/Card1";

const { v4: uuid } = require("uuid");

const itemsFromBackend = [
  { id: uuid(), content: <Comp name="PRESS-120" />, time: 7.0 },
  { id: uuid(), content: <Comp name="PRESS-130" />, time: 7.0 },
  { id: uuid(), content: <Comp name="PRESS-140" />, time: 7.0 },
  { id: uuid(), content: <Comp name="PRESS-150" />, time: 7.0 },
  { id: uuid(), content: <Comp name="PRESS-160" />, time: 7.0 },
  { id: uuid(), content: <Comp name="PRESS-170" />, time: 7.0 },
];

const columnsFromBackend = (itemsFromBackend) => {
  return {
    [uuid()]: {
      name: 7.0,
      items: itemsFromBackend.filter((item) => {
        return item.time === 7.0;
      }),
    },
    [uuid()]: {
      name: 7.05,
      items: itemsFromBackend.filter((item) => {
        return item.time === 7.05;
      }),
    },
    [uuid()]: {
      name: 7.1,
      items: itemsFromBackend.filter((item) => {
        return item.time === 7.1;
      }),
    },
    [uuid()]: {
      name: 7.15,
      items: itemsFromBackend.filter((item) => {
        return item.time === 7.15;
      }),
    },
    [uuid()]: {
      name: 7.2,
      items: itemsFromBackend.filter((item) => {
        return item.time === 7.2;
      }),
    },
    [uuid()]: {
      name: 7.25,
      items: itemsFromBackend.filter((item) => {
        return item.time === 7.25;
      }),
    },
    [uuid()]: {
      name: 7.3,
      items: itemsFromBackend.filter((item) => {
        return item.time === 7.3;
      }),
    },
    [uuid()]: {
      name: 7.35,
      items: itemsFromBackend.filter((item) => {
        return item.time === 7.35;
      }),
    },
    [uuid()]: {
      name: 7.4,
      items: itemsFromBackend.filter((item) => {
        return item.time === 7.4;
      }),
    },
    [uuid()]: {
      name: 7.45,
      items: itemsFromBackend.filter((item) => {
        return item.time === 7.45;
      }),
    },
    [uuid()]: {
      name: 7.5,
      items: itemsFromBackend.filter((item) => {
        return item.time === 7.5;
      }),
    },
    [uuid()]: {
      name: 7.55,
      items: itemsFromBackend.filter((item) => {
        return item.time === 7.55;
      }),
    },
    [uuid()]: {
      name: 8.0,
      items: itemsFromBackend.filter((item) => {
        return item.time === 8.0;
      }),
    },
    [uuid()]: {
      name: 8.05,
      items: itemsFromBackend.filter((item) => {
        return item.time === 8.05;
      }),
    },
    [uuid()]: {
      name: 8.1,
      items: itemsFromBackend.filter((item) => {
        return item.time === 8.1;
      }),
    },
    [uuid()]: {
      name: 8.15,
      items: itemsFromBackend.filter((item) => {
        return item.time === 8.15;
      }),
    },
    [uuid()]: {
      name: 8.2,
      items: itemsFromBackend.filter((item) => {
        return item.time === 8.2;
      }),
    },
    [uuid()]: {
      name: 8.25,
      items: itemsFromBackend.filter((item) => {
        return item.time === 8.25;
      }),
    },
    [uuid()]: {
      name: 8.3,
      items: itemsFromBackend.filter((item) => {
        return item.time === 8.3;
      }),
    },
    [uuid()]: {
      name: 8.35,
      items: itemsFromBackend.filter((item) => {
        return item.time === 8.35;
      }),
    },
    [uuid()]: {
      name: 8.4,
      items: itemsFromBackend.filter((item) => {
        return item.time === 8.4;
      }),
    },
    [uuid()]: {
      name: 8.45,
      items: itemsFromBackend.filter((item) => {
        return item.time === 8.45;
      }),
    },
    [uuid()]: {
      name: 8.5,
      items: itemsFromBackend.filter((item) => {
        return item.time === 8.5;
      }),
    },
    [uuid()]: {
      name: 8.55,
      items: itemsFromBackend.filter((item) => {
        return item.time === 8.55;
      }),
    },
    [uuid()]: {
      name: 9.0,
      items: itemsFromBackend.filter((item) => {
        return item.time === 9.0;
      }),
    },
    [uuid()]: {
      name: 9.05,
      items: itemsFromBackend.filter((item) => {
        return item.time === 9.05;
      }),
    },
    [uuid()]: {
      name: 9.1,
      items: itemsFromBackend.filter((item) => {
        return item.time === 9.1;
      }),
    },
    [uuid()]: {
      name: 9.15,
      items: itemsFromBackend.filter((item) => {
        return item.time === 9.15;
      }),
    },
    [uuid()]: {
      name: 9.2,
      items: itemsFromBackend.filter((item) => {
        return item.time === 9.2;
      }),
    },
    [uuid()]: {
      name: 9.25,
      items: itemsFromBackend.filter((item) => {
        return item.time === 9.25;
      }),
    },
    [uuid()]: {
      name: 9.3,
      items: itemsFromBackend.filter((item) => {
        return item.time === 9.3;
      }),
    },
    [uuid()]: {
      name: 9.35,
      items: itemsFromBackend.filter((item) => {
        return item.time === 9.35;
      }),
    },
    [uuid()]: {
      name: 9.4,
      items: itemsFromBackend.filter((item) => {
        return item.time === 9.4;
      }),
    },
    [uuid()]: {
      name: 9.45,
      items: itemsFromBackend.filter((item) => {
        return item.time === 9.45;
      }),
    },
    [uuid()]: {
      name: 9.5,
      items: itemsFromBackend.filter((item) => {
        return item.time === 9.5;
      }),
    },
    [uuid()]: {
      name: 9.55,
      items: itemsFromBackend.filter((item) => {
        return item.time === 9.55;
      }),
    },
    [uuid()]: {
      name: 10.0,
      items: itemsFromBackend.filter((item) => {
        return item.time === 10.0;
      }),
    },
    [uuid()]: {
      name: 10.05,
      items: itemsFromBackend.filter((item) => {
        return item.time === 10.05;
      }),
    },
    [uuid()]: {
      name: 10.1,
      items: itemsFromBackend.filter((item) => {
        return item.time === 10.1;
      }),
    },
    [uuid()]: {
      name: 10.15,
      items: itemsFromBackend.filter((item) => {
        return item.time === 10.15;
      }),
    },
    [uuid()]: {
      name: 10.2,
      items: itemsFromBackend.filter((item) => {
        return item.time === 10.2;
      }),
    },
    [uuid()]: {
      name: 10.25,
      items: itemsFromBackend.filter((item) => {
        return item.time === 10.25;
      }),
    },
    [uuid()]: {
      name: 10.3,
      items: itemsFromBackend.filter((item) => {
        return item.time === 10.3;
      }),
    },
    [uuid()]: {
      name: 10.35,
      items: itemsFromBackend.filter((item) => {
        return item.time === 10.35;
      }),
    },
    [uuid()]: {
      name: 10.4,
      items: itemsFromBackend.filter((item) => {
        return item.time === 10.4;
      }),
    },
    [uuid()]: {
      name: 10.45,
      items: itemsFromBackend.filter((item) => {
        return item.time === 10.45;
      }),
    },
    [uuid()]: {
      name: 10.5,
      items: itemsFromBackend.filter((item) => {
        return item.time === 10.5;
      }),
    },
    [uuid()]: {
      name: 10.55,
      items: itemsFromBackend.filter((item) => {
        return item.time === 10.55;
      }),
    },
    [uuid()]: {
      name: 11.0,
      items: itemsFromBackend.filter((item) => {
        return item.time === 11.0;
      }),
    },
    [uuid()]: {
      name: 11.05,
      items: itemsFromBackend.filter((item) => {
        return item.time === 11.05;
      }),
    },
    [uuid()]: {
      name: 11.1,
      items: itemsFromBackend.filter((item) => {
        return item.time === 11.1;
      }),
    },
    [uuid()]: {
      name: 11.15,
      items: itemsFromBackend.filter((item) => {
        return item.time === 11.15;
      }),
    },
    [uuid()]: {
      name: 11.2,
      items: itemsFromBackend.filter((item) => {
        return item.time === 11.2;
      }),
    },
    [uuid()]: {
      name: 11.25,
      items: itemsFromBackend.filter((item) => {
        return item.time === 11.25;
      }),
    },
    [uuid()]: {
      name: 11.3,
      items: itemsFromBackend.filter((item) => {
        return item.time === 11.3;
      }),
    },
    [uuid()]: {
      name: 11.35,
      items: itemsFromBackend.filter((item) => {
        return item.time === 11.35;
      }),
    },
    [uuid()]: {
      name: 11.4,
      items: itemsFromBackend.filter((item) => {
        return item.time === 11.4;
      }),
    },
    [uuid()]: {
      name: 11.45,
      items: itemsFromBackend.filter((item) => {
        return item.time === 11.45;
      }),
    },
    [uuid()]: {
      name: 11.5,
      items: itemsFromBackend.filter((item) => {
        return item.time === 11.5;
      }),
    },
    [uuid()]: {
      name: 11.55,
      items: itemsFromBackend.filter((item) => {
        return item.time === 11.55;
      }),
    },
    [uuid()]: {
      name: 12.0,
      items: itemsFromBackend.filter((item) => {
        return item.time === 12.0;
      }),
    },
    [uuid()]: {
      name: 12.05,
      items: itemsFromBackend.filter((item) => {
        return item.time === 12.05;
      }),
    },
    [uuid()]: {
      name: 12.1,
      items: itemsFromBackend.filter((item) => {
        return item.time === 12.1;
      }),
    },
    [uuid()]: {
      name: 12.15,
      items: itemsFromBackend.filter((item) => {
        return item.time === 12.15;
      }),
    },
    [uuid()]: {
      name: 12.2,
      items: itemsFromBackend.filter((item) => {
        return item.time === 12.2;
      }),
    },
    [uuid()]: {
      name: 12.25,
      items: itemsFromBackend.filter((item) => {
        return item.time === 12.25;
      }),
    },
    [uuid()]: {
      name: 12.3,
      items: itemsFromBackend.filter((item) => {
        return item.time === 12.3;
      }),
    },
    [uuid()]: {
      name: 12.35,
      items: itemsFromBackend.filter((item) => {
        return item.time === 12.35;
      }),
    },
    [uuid()]: {
      name: 12.4,
      items: itemsFromBackend.filter((item) => {
        return item.time === 12.4;
      }),
    },
    [uuid()]: {
      name: 12.45,
      items: itemsFromBackend.filter((item) => {
        return item.time === 12.45;
      }),
    },
    [uuid()]: {
      name: 12.5,
      items: itemsFromBackend.filter((item) => {
        return item.time === 12.5;
      }),
    },
    [uuid()]: {
      name: 12.55,
      items: itemsFromBackend.filter((item) => {
        return item.time === 12.55;
      }),
    },
    [uuid()]: {
      name: 1.0,
      items: itemsFromBackend.filter((item) => {
        return item.time === 1.0;
      }),
    },
    [uuid()]: {
      name: 1.05,
      items: itemsFromBackend.filter((item) => {
        return item.time === 1.05;
      }),
    },
    [uuid()]: {
      name: 1.1,
      items: itemsFromBackend.filter((item) => {
        return item.time === 1.1;
      }),
    },
    [uuid()]: {
      name: 1.15,
      items: itemsFromBackend.filter((item) => {
        return item.time === 1.15;
      }),
    },
    [uuid()]: {
      name: 1.2,
      items: itemsFromBackend.filter((item) => {
        return item.time === 1.2;
      }),
    },
    [uuid()]: {
      name: 1.25,
      items: itemsFromBackend.filter((item) => {
        return item.time === 1.25;
      }),
    },
    [uuid()]: {
      name: 1.3,
      items: itemsFromBackend.filter((item) => {
        return item.time === 1.3;
      }),
    },
    [uuid()]: {
      name: 1.35,
      items: itemsFromBackend.filter((item) => {
        return item.time === 1.35;
      }),
    },
    [uuid()]: {
      name: 1.4,
      items: itemsFromBackend.filter((item) => {
        return item.time === 1.4;
      }),
    },
    [uuid()]: {
      name: 1.45,
      items: itemsFromBackend.filter((item) => {
        return item.time === 1.45;
      }),
    },
    [uuid()]: {
      name: 1.5,
      items: itemsFromBackend.filter((item) => {
        return item.time === 1.5;
      }),
    },
    [uuid()]: {
      name: 1.55,
      items: itemsFromBackend.filter((item) => {
        return item.time === 1.55;
      }),
    },
    [uuid()]: {
      name: 2.0,
      items: itemsFromBackend.filter((item) => {
        return item.time === 2.0;
      }),
    },
    [uuid()]: {
      name: 2.05,
      items: itemsFromBackend.filter((item) => {
        return item.time === 2.05;
      }),
    },
    [uuid()]: {
      name: 2.1,
      items: itemsFromBackend.filter((item) => {
        return item.time === 2.1;
      }),
    },
    [uuid()]: {
      name: 2.15,
      items: itemsFromBackend.filter((item) => {
        return item.time === 2.15;
      }),
    },
    [uuid()]: {
      name: 2.2,
      items: itemsFromBackend.filter((item) => {
        return item.time === 2.2;
      }),
    },
    [uuid()]: {
      name: 2.25,
      items: itemsFromBackend.filter((item) => {
        return item.time === 2.25;
      }),
    },
    [uuid()]: {
      name: 2.3,
      items: itemsFromBackend.filter((item) => {
        return item.time === 2.3;
      }),
    },
    [uuid()]: {
      name: 2.35,
      items: itemsFromBackend.filter((item) => {
        return item.time === 2.35;
      }),
    },
    [uuid()]: {
      name: 2.4,
      items: itemsFromBackend.filter((item) => {
        return item.time === 2.4;
      }),
    },
    [uuid()]: {
      name: 2.45,
      items: itemsFromBackend.filter((item) => {
        return item.time === 2.45;
      }),
    },
    [uuid()]: {
      name: 2.5,
      items: itemsFromBackend.filter((item) => {
        return item.time === 2.5;
      }),
    },
    [uuid()]: {
      name: 2.55,
      items: itemsFromBackend.filter((item) => {
        return item.time === 2.55;
      }),
    },
    [uuid()]: {
      name: 3.0,
      items: itemsFromBackend.filter((item) => {
        return item.time === 3.0;
      }),
    },
    [uuid()]: {
      name: 3.05,
      items: itemsFromBackend.filter((item) => {
        return item.time === 3.05;
      }),
    },
    [uuid()]: {
      name: 3.1,
      items: itemsFromBackend.filter((item) => {
        return item.time === 3.1;
      }),
    },
    [uuid()]: {
      name: 3.15,
      items: itemsFromBackend.filter((item) => {
        return item.time === 3.15;
      }),
    },
    [uuid()]: {
      name: 3.2,
      items: itemsFromBackend.filter((item) => {
        return item.time === 3.2;
      }),
    },
    [uuid()]: {
      name: 3.25,
      items: itemsFromBackend.filter((item) => {
        return item.time === 3.25;
      }),
    },
    [uuid()]: {
      name: 3.3,
      items: itemsFromBackend.filter((item) => {
        return item.time === 9.3;
      }),
    },
    [uuid()]: {
      name: 3.35,
      items: itemsFromBackend.filter((item) => {
        return item.time === 3.35;
      }),
    },
    [uuid()]: {
      name: 3.4,
      items: itemsFromBackend.filter((item) => {
        return item.time === 3.4;
      }),
    },
    [uuid()]: {
      name: 3.45,
      items: itemsFromBackend.filter((item) => {
        return item.time === 3.45;
      }),
    },
    [uuid()]: {
      name: 3.5,
      items: itemsFromBackend.filter((item) => {
        return item.time === 3.5;
      }),
    },
    [uuid()]: {
      name: 3.55,
      items: itemsFromBackend.filter((item) => {
        return item.time === 3.55;
      }),
    },
    [uuid()]: {
      name: 4.0,
      items: itemsFromBackend.filter((item) => {
        return item.time === 4.0;
      }),
    },
    [uuid()]: {
      name: 4.05,
      items: itemsFromBackend.filter((item) => {
        return item.time === 4.05;
      }),
    },
    [uuid()]: {
      name: 4.1,
      items: itemsFromBackend.filter((item) => {
        return item.time === 4.1;
      }),
    },
    [uuid()]: {
      name: 4.15,
      items: itemsFromBackend.filter((item) => {
        return item.time === 4.15;
      }),
    },
    [uuid()]: {
      name: 4.2,
      items: itemsFromBackend.filter((item) => {
        return item.time === 4.2;
      }),
    },
    [uuid()]: {
      name: 4.25,
      items: itemsFromBackend.filter((item) => {
        return item.time === 4.25;
      }),
    },
    [uuid()]: {
      name: 4.3,
      items: itemsFromBackend.filter((item) => {
        return item.time === 4.3;
      }),
    },
    [uuid()]: {
      name: 4.35,
      items: itemsFromBackend.filter((item) => {
        return item.time === 4.35;
      }),
    },
    [uuid()]: {
      name: 4.4,
      items: itemsFromBackend.filter((item) => {
        return item.time === 4.4;
      }),
    },
    [uuid()]: {
      name: 4.45,
      items: itemsFromBackend.filter((item) => {
        return item.time === 4.45;
      }),
    },
    [uuid()]: {
      name: 4.5,
      items: itemsFromBackend.filter((item) => {
        return item.time === 4.5;
      }),
    },
    [uuid()]: {
      name: 4.55,
      items: itemsFromBackend.filter((item) => {
        return item.time === 4.55;
      }),
    },
    [uuid()]: {
      name: 5.0,
      items: itemsFromBackend.filter((item) => {
        return item.time === 5.0;
      }),
    },
    [uuid()]: {
      name: 5.05,
      items: itemsFromBackend.filter((item) => {
        return item.time === 5.05;
      }),
    },
    [uuid()]: {
      name: 5.1,
      items: itemsFromBackend.filter((item) => {
        return item.time === 5.1;
      }),
    },
    [uuid()]: {
      name: 5.15,
      items: itemsFromBackend.filter((item) => {
        return item.time === 5.15;
      }),
    },
    [uuid()]: {
      name: 5.2,
      items: itemsFromBackend.filter((item) => {
        return item.time === 5.2;
      }),
    },
    [uuid()]: {
      name: 5.25,
      items: itemsFromBackend.filter((item) => {
        return item.time === 5.25;
      }),
    },
    [uuid()]: {
      name: 5.3,
      items: itemsFromBackend.filter((item) => {
        return item.time === 5.3;
      }),
    },
    [uuid()]: {
      name: 5.35,
      items: itemsFromBackend.filter((item) => {
        return item.time === 5.35;
      }),
    },
    [uuid()]: {
      name: 5.4,
      items: itemsFromBackend.filter((item) => {
        return item.time === 5.4;
      }),
    },
    [uuid()]: {
      name: 5.45,
      items: itemsFromBackend.filter((item) => {
        return item.time === 5.45;
      }),
    },
    [uuid()]: {
      name: 5.5,
      items: itemsFromBackend.filter((item) => {
        return item.time === 5.5;
      }),
    },
    [uuid()]: {
      name: 5.55,
      items: itemsFromBackend.filter((item) => {
        return item.time === 5.55;
      }),
    },
    [uuid()]: {
      name: 6.0,
      items: itemsFromBackend.filter((item) => {
        return item.time === 6.0;
      }),
    },
    [uuid()]: {
      name: 6.05,
      items: itemsFromBackend.filter((item) => {
        return item.time === 6.05;
      }),
    },
    [uuid()]: {
      name: 6.1,
      items: itemsFromBackend.filter((item) => {
        return item.time === 6.1;
      }),
    },
    [uuid()]: {
      name: 6.15,
      items: itemsFromBackend.filter((item) => {
        return item.time === 6.15;
      }),
    },
    [uuid()]: {
      name: 6.2,
      items: itemsFromBackend.filter((item) => {
        return item.time === 6.2;
      }),
    },
    [uuid()]: {
      name: 6.25,
      items: itemsFromBackend.filter((item) => {
        return item.time === 6.25;
      }),
    },
    [uuid()]: {
      name: 6.3,
      items: itemsFromBackend.filter((item) => {
        return item.time === 6.3;
      }),
    },
    [uuid()]: {
      name: 6.35,
      items: itemsFromBackend.filter((item) => {
        return item.time === 6.35;
      }),
    },
    [uuid()]: {
      name: 6.4,
      items: itemsFromBackend.filter((item) => {
        return item.time === 6.4;
      }),
    },
    [uuid()]: {
      name: 6.45,
      items: itemsFromBackend.filter((item) => {
        return item.time === 6.45;
      }),
    },
    [uuid()]: {
      name: 6.5,
      items: itemsFromBackend.filter((item) => {
        return item.time === 6.5;
      }),
    },
    [uuid()]: {
      name: 6.55,
      items: itemsFromBackend.filter((item) => {
        return item.time === 6.55;
      }),
    },

    // [uuid()]: {
    //   name: "7.00PM",
    //   items: []
    // }
  };
};

function Dragcard({ starttime }) {
  const [backend, setBackend] = useState([
    { id: uuid(), content: <Comp name="PRESS-120" />, time: 7.0 },
    { id: uuid(), content: <Comp name="PRESS-130" />, time: 7.0 },
    { id: uuid(), content: <Comp name="PRESS-140" />, time: 7.2 },
    { id: uuid(), content: <Comp name="PRESS-150" />, time: 7.15 },
    { id: uuid(), content: <Comp name="PRESS-160" />, time: 7.05 },
    { id: uuid(), content: <Comp name="PRESS-170" />, time: 7.05 },
  ]);
  const [columns, setColumns] = useState(columnsFromBackend(backend));

  console.log("h", starttime);

  const onDragEnd = (result, columns, setColumns) => {
    console.log(itemsFromBackend);
    if (!result.destination) return;
    const { source, destination } = result;


    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      console.log("if")
      // console.log(source, "123");
      // console.log(destination, "123");

      // console.log( columns, "123");

      const destItems = [...destColumn.items];

      // drag drop change situation time update
      let [removed] = sourceItems.splice(source.index, 1);
      removed = {
        ...removed,
        time: columns[destination.droppableId].name,
      };

      destItems.splice(destination.index, 0, removed);
      console.log(removed, "456");
      let selecttask = backend.filter((item) => {
        //all place can drag and drop
        return item.content === removed.content;
      });
      selecttask[0].time = columns[destination.droppableId].name;
      console.log(...selecttask, "...selecttask");

      setBackend([...backend, ...selecttask]);
      console.log(selecttask, "amma");

      console.log(columns[destination.droppableId]);
      // setDest(columns[destination.droppableId].name)

      // dest state
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      console.log("else");
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      // console.log("hello column " ,column )
      // console.log("hello copiedItems" ,copiedItems)
      const [removed] = copiedItems.splice(source.index,1);
      console.log("hello removed" ,[removed])
      copiedItems.splice(destination.index, 0, removed);
      // console.log("hello copiedItems" ,copiedItems)
      // console.log("hello column " ,column )
     
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          // items:
          items: copiedItems,
        },
      });
    }
  };
  console.log(111111111111111111111, backend);
  return (
    <>
      <div className="head">
        <h1> Sun-tws Kanban board </h1>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr", // 12 participant grid
          gridGap: "10px",
          height: "100%",
        }}
      >
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                key={columnId}
              >
                <h2>{column.name}</h2>
                <div style={{ margin: 8 }}>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: snapshot.isDraggingOver
                              ? "lightblue"
                              : "lightgrey",
                            padding: 4,
                            width: 250,
                            minHeight: 500,
                          }}
                        >
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        userSelect: "none",
                                        padding: 16,
                                        margin: "0 0 8px 0",
                                        minHeight: "50px",
                                        backgroundColor: snapshot.isDragging
                                          ? "#263B4A"
                                          : "#456C86",
                                        color: "white",
                                        ...provided.draggableProps.style,
                                      }}
                                    >
                                      {item.time}
                                      {item.content}
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          })}
        </DragDropContext>
      </div>
    </>
  );
}

export default Dragcard;

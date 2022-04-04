import React, { useState ,useEffect} from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Comp from "./Comp";
import "./Dragcard.css";


const { v4: uuid } = require("uuid");

const itemsFromBackend = [
  // { id: uuid(), content: <Comp name='PRESS-120' />, time: 7.00 },
  // { id: uuid(), content: <Comp name='PRESS-130' />, time: 7.00 },
  // { id: uuid(), content: <Comp name='PRESS-140' />, time: 7.00 },
  // { id: uuid(), content: <Comp name='PRESS-150' />, time: 7.00 },
  // { id: uuid(), content: <Comp name='PRESS-160' />, time: 7.00 },
  // { id: uuid(), content: <Comp name='PRESS-170' />, time: 7.00 },
];

const columnsFromBackend = (itemsFromBackend) => {
  return {
    [uuid()]: {
      name: 7.00,
      items: itemsFromBackend.filter((item) => {
        return item.time === 7.00;
      }),
    },
    [uuid()]: {
      name: 7.05,
      items: itemsFromBackend.filter((item) => {
        return item.time === 7.05;
      }),
    },
    [uuid()]: {
      name: 7.10,
      items: itemsFromBackend.filter((item) => {
        return item.time === 7.10;
      }),
    },
    [uuid()]: {
      name: 7.15,
      items: itemsFromBackend.filter((item) => {
        return item.time === 7.15;
      }),
    },
    [uuid()]: {
      name: 7.20,
      items: itemsFromBackend.filter((item) => {
        return item.time === 7.20;
      }),
    },
    [uuid()]: {
      name: 7.25,
      items: itemsFromBackend.filter((item) => {
        return item.time === 7.25;
      }),
    },
    [uuid()]: {
      name: 7.30,
      items: itemsFromBackend.filter((item) => {
        return item.time === 7.30;
      }),
    },
    [uuid()]: {
      name: 7.35,
      items: itemsFromBackend.filter((item) => {
        return item.time === 7.35;
      }),
    },
    [uuid()]: {
      name: 7.40,
      items: itemsFromBackend.filter((item) => {
        return item.time === 7.40;
      }),
    },
    [uuid()]: {
      name: 7.45,
      items: itemsFromBackend.filter((item) => {
        return item.time === 7.45;
      }),
    },
    [uuid()]: {
      name: 7.50,
      items: itemsFromBackend.filter((item) => {
        return item.time === 7.50;
      }),
    },
    [uuid()]: {
      name: 7.55,
      items: itemsFromBackend.filter((item) => {
        return item.time === 7.55;
      }),
    },
    [uuid()]: {
      name: 8.00,
      items: itemsFromBackend.filter((item) => {
        return item.time === 8.00;
      }),
    },
    [uuid()]: {
      name: 8.05,
      items: itemsFromBackend.filter((item) => {
        return item.time === 8.05;
      }),
    },
    [uuid()]: {
      name: 8.10,
      items: itemsFromBackend.filter((item) => {
        return item.time === 8.10;
      }),
    },
    [uuid()]: {
      name: 8.15,
      items: itemsFromBackend.filter((item) => {
        return item.time === 8.15;
      }),
    },
    [uuid()]: {
      name: 8.20,
      items: itemsFromBackend.filter((item) => {
        return item.time === 8.20;
      }),
    },
    [uuid()]: {
      name: 8.25,
      items: itemsFromBackend.filter((item) => {
        return item.time === 8.25;
      }),
    },
    [uuid()]: {
      name: 8.30,
      items: itemsFromBackend.filter((item) => {
        return item.time === 8.30;
      }),
    },
    [uuid()]: {
      name: 8.35,
      items: itemsFromBackend.filter((item) => {
        return item.time === 8.35;
      }),
    },
    [uuid()]: {
      name: 8.40,
      items: itemsFromBackend.filter((item) => {
        return item.time === 8.40;
      }),
    },
    [uuid()]: {
      name: 8.45,
      items: itemsFromBackend.filter((item) => {
        return item.time === 8.45;
      }),
    },
    [uuid()]: {
      name: 8.50,
      items: itemsFromBackend.filter((item) => {
        return item.time === 8.50;
      }),
    },
    [uuid()]: {
      name: 8.55,
      items: itemsFromBackend.filter((item) => {
        return item.time === 8.55;
      }),
    },
    [uuid()]: {
      name: 9.00,
      items: itemsFromBackend.filter((item) => {
        return item.time === 9.00;
      }),
    },
    [uuid()]: {
      name: 9.05,
      items: itemsFromBackend.filter((item) => {
        return item.time === 9.05;
      }),
    },
    [uuid()]: {
      name: 9.10,
      items: itemsFromBackend.filter((item) => {
        return item.time === 9.10;
      }),
    },
    [uuid()]: {
      name: 9.15,
      items: itemsFromBackend.filter((item) => {
        return item.time === 9.15;
      }),
    },
    [uuid()]: {
      name: 9.20,
      items: itemsFromBackend.filter((item) => {
        return item.time === 9.20;
      }),
    },
    [uuid()]: {
      name: 9.25,
      items: itemsFromBackend.filter((item) => {
        return item.time === 9.25;
      }),
    },
    [uuid()]: {
      name: 9.30,
      items: itemsFromBackend.filter((item) => {
        return item.time === 9.30;
      }),
    },
    [uuid()]: {
      name: 9.35,
      items: itemsFromBackend.filter((item) => {
        return item.time === 9.35;
      }),
    },
    [uuid()]: {
      name: 9.40,
      items: itemsFromBackend.filter((item) => {
        return item.time === 9.40;
      }),
    },
    [uuid()]: {
      name: 9.45,
      items: itemsFromBackend.filter((item) => {
        return item.time === 9.45;
      }),
    },
    [uuid()]: {
      name: 9.50,
      items: itemsFromBackend.filter((item) => {
        return item.time === 9.50;
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
        return item.time === 10.00;
      }),
    },
    [uuid()]: {
      name: 10.05,
      items: itemsFromBackend.filter((item) => {
        return item.time === 10.05;
      }),
    },
    [uuid()]: {
      name: 10.10,
      items: itemsFromBackend.filter((item) => {
        return item.time === 10.10;
      }),
    },
    [uuid()]: {
      name: 10.15,
      items: itemsFromBackend.filter((item) => {
        return item.time === 10.15;
      }),
    },
    [uuid()]: {
      name: 10.20,
      items: itemsFromBackend.filter((item) => {
        return item.time === 10.20;
      }),
    },
    [uuid()]: {
      name: 10.25,
      items: itemsFromBackend.filter((item) => {
        return item.time === 10.25;
      }),
    },
    [uuid()]: {
      name: 10.30,
      items: itemsFromBackend.filter((item) => {
        return item.time === 10.30;
      }),
    },
    [uuid()]: {
      name: 10.35,
      items: itemsFromBackend.filter((item) => {
        return item.time === 10.35;
      }),
    },
    [uuid()]: {
      name: 10.40,
      items: itemsFromBackend.filter((item) => {
        return item.time === 10.40;
      }),
    },
    [uuid()]: {
      name: 10.45,
      items: itemsFromBackend.filter((item) => {
        return item.time === 10.45;
      }),
    },
    [uuid()]: {
      name: 10.50,
      items: itemsFromBackend.filter((item) => {
        return item.time === 10.50;
      }),
    },
    [uuid()]: {
      name: 10.55,
      items: itemsFromBackend.filter((item) => {
        return item.time === 10.55;
      }),
    },
    [uuid()]: {
      name: 11.00,
      items: itemsFromBackend.filter((item) => {
        return item.time === 11.00;
      }),
    },
    [uuid()]: {
      name: 11.05,
      items: itemsFromBackend.filter((item) => {
        return item.time === 11.05;
      }),
    },
    [uuid()]: {
      name: 11.10,
      items: itemsFromBackend.filter((item) => {
        return item.time === 11.10;
      }),
    },
    [uuid()]: {
      name: 11.15,
      items: itemsFromBackend.filter((item) => {
        return item.time === 11.15;
      }),
    },
    [uuid()]: {
      name: 11.20,
      items: itemsFromBackend.filter((item) => {
        return item.time === 11.20;
      }),
    },
    [uuid()]: {
      name: 11.25,
      items: itemsFromBackend.filter((item) => {
        return item.time === 11.25;
      }),
    },
    [uuid()]: {
      name: 11.30,
      items: itemsFromBackend.filter((item) => {
        return item.time === 11.30;
      }),
    },
    [uuid()]: {
      name: 11.35,
      items: itemsFromBackend.filter((item) => {
        return item.time === 11.35;
      }),
    },
    [uuid()]: {
      name: 11.40,
      items: itemsFromBackend.filter((item) => {
        return item.time === 11.40;
      }),
    },
    [uuid()]: {
      name: 11.45,
      items: itemsFromBackend.filter((item) => {
        return item.time === 11.45;
      }),
    },
    [uuid()]: {
      name: 11.50,
      items: itemsFromBackend.filter((item) => {
        return item.time === 11.50;
      }),
    },
    [uuid()]: {
      name: 11.55,
      items: itemsFromBackend.filter((item) => {
        return item.time === 11.55;
      }),
    },
    [uuid()]: {
      name: 12.00,
      items: itemsFromBackend.filter((item) => {
        return item.time === 12.00;
      }),
    },
    [uuid()]: {
      name: 12.05,
      items: itemsFromBackend.filter((item) => {
        return item.time === 12.05;
      }),
    },
    [uuid()]: {
      name: 12.10,
      items: itemsFromBackend.filter((item) => {
        return item.time === 12.10;
      }),
    },
    [uuid()]: {
      name: 12.15,
      items: itemsFromBackend.filter((item) => {
        return item.time === 12.15;
      }),
    },
    [uuid()]: {
      name: 12.20,
      items: itemsFromBackend.filter((item) => {
        return item.time === 12.20;
      }),
    },
    [uuid()]: {
      name: 12.25,
      items: itemsFromBackend.filter((item) => {
        return item.time === 12.25;
      }),
    },
    [uuid()]: {
      name: 12.30,
      items: itemsFromBackend.filter((item) => {
        return item.time === 12.30;
      }),
    },
    [uuid()]: {
      name: 12.35,
      items: itemsFromBackend.filter((item) => {
        return item.time === 12.35;
      }),
    },
    [uuid()]: {
      name: 12.40,
      items: itemsFromBackend.filter((item) => {
        return item.time === 12.40;
      }),
    },
    [uuid()]: {
      name: 12.45,
      items: itemsFromBackend.filter((item) => {
        return item.time === 12.45;
      }),
    },
    [uuid()]: {
      name: 12.50,
      items: itemsFromBackend.filter((item) => {
        return item.time === 12.50;
      }),
    },
    [uuid()]: {
      name: 12.55,
      items: itemsFromBackend.filter((item) => {
        return item.time === 12.55;
      }),
    },
    [uuid()]: {
      name: 1.00,
      items: itemsFromBackend.filter((item) => {
        return item.time === 1.00;
      }),
    },
    [uuid()]: {
      name: 1.05,
      items: itemsFromBackend.filter((item) => {
        return item.time === 1.05;
      }),
    },
    [uuid()]: {
      name: 1.10,
      items: itemsFromBackend.filter((item) => {
        return item.time === 1.10;
      }),
    },
    [uuid()]: {
      name: 1.15,
      items: itemsFromBackend.filter((item) => {
        return item.time === 1.15;
      }),
    },
    [uuid()]: {
      name: 1.20,
      items: itemsFromBackend.filter((item) => {
        return item.time === 1.20;
      }),
    },
    [uuid()]: {
      name: 1.25,
      items: itemsFromBackend.filter((item) => {
        return item.time === 1.25;
      }),
    },
    [uuid()]: {
      name: 1.30,
      items: itemsFromBackend.filter((item) => {
        return item.time === 1.30;
      }),
    },
    [uuid()]: {
      name: 1.35,
      items: itemsFromBackend.filter((item) => {
        return item.time === 1.35;
      }),
    },
    [uuid()]: {
      name: 1.40,
      items: itemsFromBackend.filter((item) => {
        return item.time === 1.40;
      }),
    },
    [uuid()]: {
      name: 1.45,
      items: itemsFromBackend.filter((item) => {
        return item.time === 1.45;
      }),
    },
    [uuid()]: {
      name: 1.50,
      items: itemsFromBackend.filter((item) => {
        return item.time === 1.50;
      }),
    },
    [uuid()]: {
      name: 1.55,
      items: itemsFromBackend.filter((item) => {
        return item.time === 1.55;
      }),
    },
    [uuid()]: {
      name: 2.00,
      items: itemsFromBackend.filter((item) => {
        return item.time === 2.00;
      }),
    },
    [uuid()]: {
      name: 2.05,
      items: itemsFromBackend.filter((item) => {
        return item.time === 2.05;
      }),
    },
    [uuid()]: {
      name: 2.10,
      items: itemsFromBackend.filter((item) => {
        return item.time === 2.10;
      }),
    },
    [uuid()]: {
      name: 2.15,
      items: itemsFromBackend.filter((item) => {
        return item.time === 2.15;
      }),
    },
    [uuid()]: {
      name: 2.20,
      items: itemsFromBackend.filter((item) => {
        return item.time === 2.20;
      }),
    },
    [uuid()]: {
      name: 2.25,
      items: itemsFromBackend.filter((item) => {
        return item.time === 2.25;
      }),
    },
    [uuid()]: {
      name: 2.30,
      items: itemsFromBackend.filter((item) => {
        return item.time === 2.30;
      }),
    },
    [uuid()]: {
      name: 2.35,
      items: itemsFromBackend.filter((item) => {
        return item.time === 2.35;
      }),
    },
    [uuid()]: {
      name: 2.40,
      items: itemsFromBackend.filter((item) => {
        return item.time === 2.40;
      }),
    },
    [uuid()]: {
      name: 2.45,
      items: itemsFromBackend.filter((item) => {
        return item.time === 2.45;
      }),
    },
    [uuid()]: {
      name: 2.50,
      items: itemsFromBackend.filter((item) => {
        return item.time === 2.50;
      }),
    },
    [uuid()]: {
      name: 2.55,
      items: itemsFromBackend.filter((item) => {
        return item.time === 2.55;
      }),
    },
    [uuid()]: {
      name: 3.00,
      items: itemsFromBackend.filter((item) => {
        return item.time === 3.00;
      }),
    },
    [uuid()]: {
      name: 3.05,
      items: itemsFromBackend.filter((item) => {
        return item.time === 3.05;
      }),
    },
    [uuid()]: {
      name: 3.10,
      items: itemsFromBackend.filter((item) => {
        return item.time === 3.10;
      }),
    },
    [uuid()]: {
      name: 3.15,
      items: itemsFromBackend.filter((item) => {
        return item.time === 3.15;
      }),
    },
    [uuid()]: {
      name: 3.20,
      items: itemsFromBackend.filter((item) => {
        return item.time === 3.20;
      }),
    },
    [uuid()]: {
      name: 3.25,
      items: itemsFromBackend.filter((item) => {
        return item.time === 3.25;
      }),
    },
    [uuid()]: {
      name: 3.30,
      items: itemsFromBackend.filter((item) => {
        return item.time === 9.30;
      }),
    },
    [uuid()]: {
      name: 3.35,
      items: itemsFromBackend.filter((item) => {
        return item.time === 3.35;
      }),
    },
    [uuid()]: {
      name: 3.40,
      items: itemsFromBackend.filter((item) => {
        return item.time === 3.40;
      }),
    },
    [uuid()]: {
      name: 3.45,
      items: itemsFromBackend.filter((item) => {
        return item.time === 3.45;
      }),
    },
    [uuid()]: {
      name: 3.50,
      items: itemsFromBackend.filter((item) => {
        return item.time === 3.50;
      }),
    },
    [uuid()]: {
      name: 3.55,
      items: itemsFromBackend.filter((item) => {
        return item.time === 3.55;
      }),
    },
    [uuid()]: {
      name: 4.00,
      items: itemsFromBackend.filter((item) => {
        return item.time === 4.00;
      }),
    },
    [uuid()]: {
      name: 4.05,
      items: itemsFromBackend.filter((item) => {
        return item.time === 4.05;
      }),
    },
    [uuid()]: {
      name: 4.10,
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
      name: 4.20,
      items: itemsFromBackend.filter((item) => {
        return item.time === 4.20;
      }),
    },
    [uuid()]: {
      name: 4.25,
      items: itemsFromBackend.filter((item) => {
        return item.time === 4.25;
      }),
    },
    [uuid()]: {
      name: 4.30,
      items: itemsFromBackend.filter((item) => {
        return item.time === 4.30;
      }),
    },
    [uuid()]: {
      name: 4.35,
      items: itemsFromBackend.filter((item) => {
        return item.time === 4.35;
      }),
    },
    [uuid()]: {
      name: 4.40,
      items: itemsFromBackend.filter((item) => {
        return item.time === 4.40;
      }),
    },
    [uuid()]: {
      name: 4.45,
      items: itemsFromBackend.filter((item) => {
        return item.time === 4.45;
      }),
    },
    [uuid()]: {
      name: 4.50,
      items: itemsFromBackend.filter((item) => {
        return item.time === 4.50;
      }),
    },
    [uuid()]: {
      name: 4.55,
      items: itemsFromBackend.filter((item) => {
        return item.time === 4.55;
      }),
    },
    [uuid()]: {
      name: 5.00,
      items: itemsFromBackend.filter((item) => {
        return item.time === 5.00;
      }),
    },
    [uuid()]: {
      name: 5.05,
      items: itemsFromBackend.filter((item) => {
        return item.time === 5.05;
      }),
    },
    [uuid()]: {
      name: 5.10,
      items: itemsFromBackend.filter((item) => {
        return item.time === 5.10;
      }),
    },
    [uuid()]: {
      name: 5.15,
      items: itemsFromBackend.filter((item) => {
        return item.time === 5.15;
      }),
    },
    [uuid()]: {
      name: 5.20,
      items: itemsFromBackend.filter((item) => {
        return item.time === 5.20;
      }),
    },
    [uuid()]: {
      name: 5.25,
      items: itemsFromBackend.filter((item) => {
        return item.time === 5.25;
      }),
    },
    [uuid()]: {
      name: 5.30,
      items: itemsFromBackend.filter((item) => {
        return item.time === 5.30;
      }),
    },
    [uuid()]: {
      name: 5.35,
      items: itemsFromBackend.filter((item) => {
        return item.time === 5.35;
      }),
    },
    [uuid()]: {
      name: 5.40,
      items: itemsFromBackend.filter((item) => {
        return item.time === 5.40;
      }),
    },
    [uuid()]: {
      name: 5.45,
      items: itemsFromBackend.filter((item) => {
        return item.time === 5.45;
      }),
    },
    [uuid()]: {
      name: 5.50,
      items: itemsFromBackend.filter((item) => {
        return item.time === 5.50;
      }),
    },
    [uuid()]: {
      name: 5.55,
      items: itemsFromBackend.filter((item) => {
        return item.time === 5.55;
      }),
    },
    [uuid()]: {
      name: 6.00,
      items: itemsFromBackend.filter((item) => {
        return item.time === 6.00;
      }),
    },
    [uuid()]: {
      name: 6.05,
      items: itemsFromBackend.filter((item) => {
        return item.time === 6.05;
      }),
    },
    [uuid()]: {
      name: 6.10,
      items: itemsFromBackend.filter((item) => {
        return item.time === 6.10;
      }),
    },
    [uuid()]: {
      name: 6.15,
      items: itemsFromBackend.filter((item) => {
        return item.time === 6.15;
      }),
    },
    [uuid()]: {
      name: 6.20,
      items: itemsFromBackend.filter((item) => {
        return item.time === 6.20;
      }),
    },
    [uuid()]: {
      name: 6.25,
      items: itemsFromBackend.filter((item) => {
        return item.time === 6.25;
      }),
    },
    [uuid()]: {
      name: 6.30,
      items: itemsFromBackend.filter((item) => {
        return item.time === 6.30;
      }),
    },
    [uuid()]: {
      name: 6.35,
      items: itemsFromBackend.filter((item) => {
        return item.time === 6.35;
      }),
    },
    [uuid()]: {
      name: 6.40,
      items: itemsFromBackend.filter((item) => {
        return item.time === 6.40;
      }),
    },
    [uuid()]: {
      name: 6.45,
      items: itemsFromBackend.filter((item) => {
        return item.time === 6.45;
      }),
    },
    [uuid()]: {
      name: 6.50,
      items: itemsFromBackend.filter((item) => {
        return item.time === 6.50;
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

function Dragcard(props) {
  console.log("vvvvvv3" , props.state)
  
  const [backend, setBackend] = useState([]);
  const [columns, setColumns] = useState([]);
  // const [time1,setTime1]=useState("");


  useEffect(() => {
      setBackenddata()

  }, [props.state])

// press common card create 
  const setBackenddata = () =>{

    let array = []
    for( const carddeatail of props.state){
      console.log("11111", carddeatail)
      const object1 = 
        { id: uuid(), content: <Comp name= {carddeatail.name} state1={carddeatail} trigerdragcard={props.trigerdragcard}/>, time:carddeatail.starttime }

      array = [...array,object1]
    }

    console.log("1111111 2",array)
    setBackend(array)
    setColumns(columnsFromBackend(array))

  }
  console.log("111111 3" ,columns)


  const onDragEnd = (result, columns, setColumns) => {
    console.log(itemsFromBackend);
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];

      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      console.log("if");
      

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
      
      Putpressdetail(removed)

    } else {
      console.log("else");
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      
      const [removed] = copiedItems.splice(source.index, 1);
      console.log("hello removed", [removed]);
      copiedItems.splice(destination.index, 0, removed);
      

      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          // items:
          items: copiedItems,
        },
      });
      
    }
    // props.trigerdragcard();
  };

  console.log("11111  7",props)

  const Putpressdetail = async ( card) => {
    

    try {
      
      const body = {
        

        pid1:card.content.props.state1.pid1,
        pid2:card.content.props.state1.pid2,
        pid3:card.content.props.state1.pid3,
        pid4:card.content.props.state1.pid4,
        starttime:card.time,
        pressid :card.content.props.state1.pressid
      }

        const add6 = await fetch(`http://localhost:5433/pressAlldetailRouter/updatecarddetail`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify( body),

        }).then((response) => {
          response.json().then((res) => {
            console.log(res,"pramoth")

          })
          
        })
        .catch((e)=>{
          console.log(e)
        })
        console.log("11111 34", )

      
    } catch (err) {
      console.log(err)
    }
    
  }
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

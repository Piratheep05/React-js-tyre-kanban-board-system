// import React from "react";
import "./App.css";
import Draggable from "react-draggable";
import { Card, Button, Typography, Table } from "@material-ui/core";
//import Card1 from "./components/Card1";
import Drag from "./components/Drag";
import Table1 from "./components/Table1";
//import { drag } from "@syncfusion/ej2-react-schedule";
//import Draggable1 from './components/Draggable1';
import Dragcard from "./components/Dragcard";
import Draggable1 from "./components/Draggable1";
import Card1 from "./components/Card1";
import React, { useState } from 'react';

function App() {
  const [isShown, setIsShown] = useState(false);
  return (
    
     
      <div className="ui">
        <Dragcard />{" "}
        {/* <Card1/> */}
      </div>
    
    
  //   <div className="App">
  //   <button
  //     onMouseEnter={() => setIsShown(true)}
  //     onMouseLeave={() => setIsShown(false)}>
  //     Hover over me!
  //   </button>
  //   {isShown && (
  //     <div className="tire">
  //       <Card1/>
  //     </div>
  // //   )}
  // </div>



    // <Draggable>
    //     <div className="drag-box">
    //     <h5> label</h5>

    //     </div>

    //   </Draggable>
    //   // <div>

    //   <Table1/>
    // </div>

    // const DraggableCard = ({ children }) => {
    //   const cardRef = useRef(null);
    //   useDraggable(cardRef);

    //   return (
    //     <div className="card" ref={cardRef}>
    //       {children}
    //     </div>
    //   );
    // };

    // function App() {
    //   return (
    //     <div className="container">
    //       <DraggableCard>Card 1</DraggableCard>
    //       <DraggableCard>Card 2</DraggableCard>
    //       <DraggableCard>Card 3</DraggableCard>
    //       <DraggableCard>Card 4</DraggableCard>
    //       <DraggableCard>Card 5</DraggableCard>
    //       <DraggableCard>Card 6</DraggableCard>
    //     </div>

    //     <div className='App'>
    //      <DraggableCard bgColor="#FF9300"/>
    // <DraggableCard  bgColor="blue"/>

    //     </div>

    //   )
    // }

    // const DraggableCard = ({ text , bgColor}) => {
    //   return (
    //       <Draggable>
    //        <Card style={{ width: "20%", backgroundColor: bgColor,color:"white"}}>
    //       {/* <Button variant="text"> Buy </Button> */}
    //       {/* <Typography variant="h6"> {text} </Typography> */}
    //       <Card1/>
    //        </Card>
    //   </Draggable>
  );
}

export default App;

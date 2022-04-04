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
import React, { useState,useEffect } from 'react';

function App() {
  const [isShown, setIsShown] = useState(false);

  const [tirelabeldetail, setTirelabeldetail] = useState([
    
    
  ]);

  // service call 
  useEffect(() => {

    console.log("vvvvvv 1", tirelabeldetail);
    fetchTirelableDetails();
  
  }, []);

  const fetchTirelableDetails = async()=>{
     // need to gettiredetails from database 

     console.log("111111 5")
     
      try {
        const pressinfo1 = await fetch(
          `http://localhost:5433/pressAlldetailRouter/getpressdetail`
        );

        const fetchData5 = await pressinfo1.json();
        setTirelabeldetail(fetchData5.data.data);

         } catch (err) {
        console.error(err.message);
      }
  
  }
  return (
    
      <div className="ui">
        <Dragcard state={tirelabeldetail}
            trigerdragcard={fetchTirelableDetails}
         />
      </div>
  );
}

export default App;

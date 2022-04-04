import React, { useState, component, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import Card1 from "./Card1";
import ReactHover from "react-hover";
import { Trigger } from "react-hover/dist/ReactHover";
import Hover from "react-hover/dist/lib/Hover";
import "./Comp.css";
import Popup from "./Popup";
import { MDBIcon } from "mdbreact";
import { MdMoreVert } from "react-icons/md"; // three dot icon symbol import

// Popup and hover effect include component

const optionsCursorTrueWithMargin = {
  followCursor: true,
  shiftX: 20,
  shiftY: 0,
};

function Comp(props) {
  
  const [isShown, setIsShown] = useState(false);
  const [show, setShow] = useState(false);
  const [selectedtirelabelobj, setSelectedtirelabelobj] = useState({});
 

  console.log("vvvvvvvv 2",props.state1);

  // update value store
  const handleupdateclose = (updatedata, name) => {
    console.log(updatedata, "heerthana");
    console.log(name);
    let index = props.state1.findIndex((update) => {
      return update.name.trim() === name.trim();
    });
    props.state1[index] = updatedata;
    setSelectedtirelabelobj({});
    setShow(false);
  };

  const handleClose = () => setShow(false);

  const handleShow = (name) => {
    // let selecttire = {};
    setShow(false);
    
    setSelectedtirelabelobj(props.state1);

    // need to call service by name

    setShow(true);
  };
  const handlehovershow = (name) => {
    console.log("111111 81",selectedtirelabelobj)

    // setShow(false);
    setIsShown(false);
    
    setSelectedtirelabelobj(props.state1);
    setIsShown(true);
  };

 

  return (
    <>
      <div className="All">
        
        <div>
          <div className="btn">
            <Button variant="primary" onClick={() => handleShow(props.name)}>
              {/* three dot symbol import */}
              <MdMoreVert />
            </Button>
          </div>
          {/* popup create using react bootstrap modal component */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>PRESS</Modal.Title>
            </Modal.Header>
            <div className="tag">
              <Modal.Body>
                {/* popup inside push card1 */}
                <Card1
                  data={selectedtirelabelobj}
                  handleupdateclose={handleupdateclose}
                  trigerdragcard={props.trigerdragcard}
                  // data1={pressid}
                />
              </Modal.Body>
            </div>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              
            </Modal.Footer>
          </Modal>
        </div>
        
      </div>

      {/* // hover function start  */}

      <div className="App">
        <div className="pressname">
        <button
          onMouseEnter={() => {
            handlehovershow(props.name);
            setIsShown(true);
          }}
          onMouseLeave={() => setIsShown(false)}
        >
          {props.name}
        </button>
        </div>
        {isShown && (
          <div className="card">
           { console.log("1111 6" ,selectedtirelabelobj )}
            <Card1
              data={selectedtirelabelobj}
              handleupdateclose={handleupdateclose} 
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Comp;

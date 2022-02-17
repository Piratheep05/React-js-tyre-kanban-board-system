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
  const [tirelabeldetail, setTirelabeldetail] = useState([
    {
      id: 120,
      name: "PRESS-120",
      starttime: 7.15,
      outtime: 8.45,
      endtime: 5.25,
      loadtime: 4.05,
      pid1: 9.0,
      pid2: 10.0,
      pid3: 11.0,
      pid4: 12.0,
    },
    {
      id: 130,
      name: "PRESS-130",
      starttime: 10.15,
      outtime: 1.05,
      endtime: 5.0,
      loadtime: 4.0,
      pid1: 8.0,
      pid2: 7.0,
      pid3: 6.0,
      pid4: 5.0,
    },
    {
      id: 140,
      name: "PRESS-140",
      starttime: 7.0,
      outtime: 8.0,
      endtime: 5.0,
      loadtime: 4.0,
      pid1: 9.0,
      pid2: 10.0,
      pid3: 11.0,
      pid4: 12.0,
    },
    {
      id: 150,
      name: "PRESS-150",
      starttime: 7.0,
      outtime: 8.0,
      endtime: 5.0,
      loadtime: 4.0,
      pid1: 9.0,
      pid2: 10.0,
      pid3: 11.0,
      pid4: 12.0,
    },
    {
      id: 160,
      name: "PRESS-160",
      starttime: 7.0,
      outtime: 8.0,
      endtime: 5.0,
      loadtime: 4.0,
      pid1: 9.0,
      pid2: 10.0,
      pid3: 11.0,
      pid4: 12.0,
    },
    {
      id: 170,
      name: "PRESS-170",
      starttime: 7.0,
      outtime: 8.0,
      endtime: 5.0,
      loadtime: 4.0,
      pid1: 9.0,
      pid2: 10.0,
      pid3: 11.0,
      pid4: 12.0,
    },
  ]);

  // service call 
  useEffect(() => {
    console.log("hhhhh 1", tirelabeldetail);
  }, []);

  console.log("hhhhh 2", tirelabeldetail);

  // update value store
  const handleupdateclose = (updatedata, name) => {
    console.log(updatedata, "heerthana");
    console.log(name);
    let index = tirelabeldetail.findIndex((update) => {
      return update.name.trim() === name.trim();
    });
    tirelabeldetail[index] = updatedata;
    setSelectedtirelabelobj({});
    setShow(false);
  };

  const handleClose = () => setShow(false);

  const handleShow = (name) => {
    let selecttire = {};
    setShow(false);
    console.log(name);

    for (let tire of tirelabeldetail) {
      console.log(tire.name, name);
      console.log(typeof tire.name, typeof name);
      console.log(tire.name.trim() === name.trim());
      if (tire.name.trim() === name.trim()) {
        console.log("ttt");
        selecttire = { ...tire };
      }
    }

    console.log(selecttire);

    setSelectedtirelabelobj(selecttire);

    // need to call service by name

    setShow(true);
  };
  const handlehovershow = (name) => {
    let selecttire = {};
    console.log(name);

    for (let tire of tirelabeldetail) {
      console.log(tire.name, name);
      console.log(typeof tire.name, typeof name);
      console.log(tire.name.trim() === name.trim());
      if (tire.name.trim() === name.trim()) {
        console.log("ttt");
        selecttire = { ...tire };
      }
    }

    console.log(selecttire);

    setSelectedtirelabelobj(selecttire);

    // need to call service by name

    // setShow(true);
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
                />
              </Modal.Body>
            </div>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              {/* <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button> */}
            </Modal.Footer>
          </Modal>
        </div>
        {/* <ReactHover
        options={optionsCursorTrueWithMargin}
        onMouseEnter={() => handleShow(props.name)}
        onHide={handleClose}
      >
        {props.name}
        <Hover type="hover" onMouseEnter={() => handlehovershow(props.name)}>
          <Card1
            data={selectedtirelabelobj}
            handleupdateclose={handleupdateclose}
          />
        </Hover>

        <Trigger type="trigger">
          <h2 > {props.name}</h2>
        </Trigger>
      </ReactHover> */}
      </div>

      <div className="App">
        <button
          onMouseEnter={() => {
            handlehovershow(props.name);
            setIsShown(true);
          }}
          onMouseLeave={() => setIsShown(false)}
        >
          {props.name}
        </button>
        {isShown && (
          <div className="card">
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

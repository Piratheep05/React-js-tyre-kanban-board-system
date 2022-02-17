import React,{useState} from 'react';
import { Button,Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card1 from './Card1';
import './Card.css'

function Popup() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          view
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>PRESS</Modal.Title>
          </Modal.Header>
          <Modal.Body className='tag'><Card1/></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }


export default Popup;

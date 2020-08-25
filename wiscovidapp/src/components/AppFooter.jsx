import React, {useState} from "react";
import { Button, Container, Navbar, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import App from "../App";

const AppFooter = () => {
    
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    
    return (
        <div className="fixed-bottom footer-style">
        <Navbar color="blue" dark>
          <Container>
                <Button className="footer-text" color="info" onClick={toggle}>About</Button>
                <Modal isOpen={modal} toggle={toggle} centered="true">
                  <ModalHeader toggle={toggle}>About</ModalHeader>
                  <ModalBody>
                    This is the modal body
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={toggle}>Close</Button>
                    <Button color="secondary" href="https://github.com/max-richter/Wisconsin-Covid-Dashboard" target="_blank" onClick={toggle}>GitHub Repo</Button>
                  </ModalFooter>
                </Modal>
                
          </Container>
        </Navbar>
      </div>
    )
}

export default AppFooter;

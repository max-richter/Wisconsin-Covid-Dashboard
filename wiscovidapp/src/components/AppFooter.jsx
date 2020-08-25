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
            <div>
                <Button className="footer-text" color="danger" onClick={toggle}>About</Button>
            </div>
          </Container>
        </Navbar>
      </div>
    )
}

export default AppFooter;

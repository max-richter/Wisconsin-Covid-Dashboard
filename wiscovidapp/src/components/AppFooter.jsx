import React, { useState } from "react";
import {
  Button,
  Container,
  Navbar,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

/**
 * Footer of the app. Contains the "About" modal with information
 * about the data used and how to find the github repo
 */
const AppFooter = () => {
  // keeps track of modal's state
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div className="fixed-bottom footer-style">
      <Navbar color="blue" dark>
        <Container>
          <Button className="footer-text" color="info" onClick={toggle}>
            About
          </Button>
          <Modal isOpen={modal} toggle={toggle} centered="true">
            <ModalHeader toggle={toggle} charCode="X">About</ModalHeader>
            <ModalBody>
              Hey! My name is Max. I go to UW-Madison and study Computer
              Science. I created this tool to simplify the process of retrieving
              the latest COVID-19 information for each county in Wisconsin.
              <hr></hr>
              The data shown on this site is fetched from the Department of
              Health Services (WI). Due to the limitation of their API, new
              COVID-19 data is released at 9am CDT each day. While the data on
              this site is updated daily, there will always be a lag in
              reporting.
              <hr></hr>
              I've open sourced the code to this site, so if you're curious to
              check it out please click on the "GitHub Repo" link below!
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggle}>
                Close
              </Button>
              <Button
                color="secondary"
                href="https://github.com/max-richter/Wisconsin-Covid-Dashboard"
                target="_blank"
                onClick={toggle}
              >
                GitHub Repo
              </Button>
            </ModalFooter>
          </Modal>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppFooter;

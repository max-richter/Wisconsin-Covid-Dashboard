import React from "react";
import {GrResources, GrLink, GrPhone} from 'react-icons/gr';

class InfoSection extends React.Component {
  render() {
    return (
      <div className="row justify-content-center row-styled footer-container fade-in">
        <div className="col-md-5">
          <div className="card grid-card info-card-styling">
            <div className="card-heading">
              <div className="card-title-style">
                Wisconsin COVID-19 Resources{" "}
                <GrResources className="icon-styled" size="1.5rem" />
              </div>
            </div>
            <div className="card-value fade-in-left">
              <span className="card-text-style">
                <ul>Have a question but don't want to talk to someone? Text COVID19 to 211-211 
                  <GrPhone className="link-icon-style" size="1.5rem"/></ul>
                <hr></hr>
                <ul><a href="https://www.dhs.wisconsin.gov/covid-19/community-testing.htm" target="_blank" rel="noopener noreferrer">
                  Find your local testing site</a><GrLink className="link-icon-style" size="1.5rem"/></ul>
                <hr></hr>
                <ul><a href="https://www.wihealthconnect.com/" target="_blank" rel="noopener noreferrer">
                  Free COVID-19 Self-Assessment</a><GrLink className="link-icon-style" size="1.5rem"/></ul>
                <hr></hr>
                <ul><a href="https://data.dhsgis.wi.gov/datasets/covid-19-historical-data-table/data?where=GEO%20%3D%20%27State%27" target="_blank" rel="noopener noreferrer">
                  State Data</a><GrLink className="link-icon-style" size="1.5rem"/></ul>
                <hr></hr>
                <ul><a href="https://data.dhsgis.wi.gov/datasets/covid-19-historical-data-table/data?where=GEO%20%3D%20%27County%27" target="_blank" rel="noopener noreferrer">
                  County Data</a><GrLink className="link-icon-style" size="1.5rem"/></ul>             
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoSection;

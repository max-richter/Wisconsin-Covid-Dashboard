import React from "react";
import MapSection from "./MapSection";
import axios from "axios";
import {
  GrBug,
  GrScorecard,
  GrGroup,
  GrStatusCritical,
  GrStatusGood,
  GrBarChart,
} from "react-icons/gr";
import "./map-theme";

class DataSection extends React.Component {
  // keep track of object's state
  state = {
    countyData: {
      negative: 0,
      positive: 0,
      deaths: 0,
      posNew: 0,
      negNew: 0,
      testNew: 0,
      name: "",
      newTests: 0,
    },
  };

  /**
   * called initially as the component renders
   * receives data from the default county of DANE
   */
  componentDidMount() {
    let baseURL =
      "https://dhsgis.wi.gov/server/rest/services/DHS_COVID19/COVID19_WI/FeatureServer/1/query?where=NAME=%27" +
      this.props.currCounty +
      "%27&outFields=NEGATIVE,POSITIVE,DEATHS,POS_NEW,NEG_NEW,TEST_NEW,NAME&outSR=4326&f=json";
    axios
      .get(baseURL)
      .then((data) => {
        let respData;
        let temp = data.data.features;
        let currLength = temp.length - 1;
        respData = temp[currLength].attributes;
        this.setState((prevState) => {
          let countyData = Object.assign({}, prevState.countyData);
          countyData["negative"] = respData.NEGATIVE;
          countyData["positive"] = respData.POSITIVE;
          countyData["deaths"] = respData.DEATHS;
          countyData["posNew"] = respData.POS_NEW;
          countyData["negNew"] = respData.NEG_NEW;
          countyData["testNew"] = respData.TEST_NEW;
          countyData["name"] = respData.NAME;
          countyData["newTests"] = respData.TEST_NEW;

          return { countyData };
        });
      })
      .catch((error) => {
        alert("Something went wrong, please reload the page");
      });
  }

  /**
   * gets new covid data as user selects a different county
   * this function is identical to didMount(), the only difference
   * is that this will be called only when the state updates
   */
  componentDidUpdate() {
    if (this.state.countyData.name !== this.props.currCounty) {
      let baseURL =
        "https://dhsgis.wi.gov/server/rest/services/DHS_COVID19/COVID19_WI/FeatureServer/1/query?where=NAME=%27" +
        this.props.currCounty +
        "%27&outFields=NEGATIVE,POSITIVE,DEATHS,POS_NEW,NEG_NEW,TEST_NEW,NAME&outSR=4326&f=json";
      axios
        .get(baseURL)
        .then((data) => {
          let respData;
          let temp = data.data.features;
          let currLength = temp.length - 1;
          respData = temp[currLength].attributes;
          this.setState((prevState) => {
            let countyData = Object.assign({}, prevState.countyData);
            countyData["negative"] = respData.NEGATIVE;
            countyData["positive"] = respData.POSITIVE;
            countyData["deaths"] = respData.DEATHS;
            countyData["posNew"] = respData.POS_NEW;
            countyData["negNew"] = respData.NEG_NEW;
            countyData["testNew"] = respData.TEST_NEW;
            countyData["name"] = respData.NAME;
            countyData["newTests"] = respData.TEST_NEW;

            return { countyData };
          });
        })
        .catch((error) => {
          alert("Something went wrong, please reload the page");
        });
    }
  }

  render() {
    return (
      <div className="container-fluid">
        {/* FIRST ROW */}
        <div className="row justify-content-center row-styled">
          <div className="col-lg-3 col-sm-6">
            <div className="card grid-card">
              <div className="card-heading">
                <div className="card-title-style">
                  Positive Cases (Total){" "}
                  <GrBug className="icon-styled" size="1.5rem" />
                </div>
              </div>
              <div className="card-value">
                <span className="card-data-style">
                  {this.state.countyData.positive.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="card grid-card">
              <div className="card-heading">
                <div className="card-title-style">
                  Negative Cases (Total){" "}
                  <GrScorecard className="icon-styled" size="1.5rem" />
                </div>
              </div>

              <div className="card-value">
                <span className="card-data-style">
                  {this.state.countyData.negative.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="card grid-card">
              <div className="card-heading">
                <div className="card-title-style">
                  Total Deaths <GrGroup className="icon-styled" size="1.5rem" />
                </div>
              </div>
              <div className="card-value">
                <span className="card-data-style">
                  {this.state.countyData.deaths.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* SECOND ROW */}
        <div className="row justify-content-center row-styled">
          <div className="col-lg-3 col-sm-6">
            <div className="card grid-card">
              <div className="card-heading">
                <div className="card-title-style">
                  New Positive Cases (Daily){" "}
                  <GrStatusCritical className="icon-styled" size="1.5rem" />
                </div>
              </div>
              <div className="card-value">
                <span className="card-data-style">
                  {this.state.countyData.posNew.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="card grid-card">
              <div className="card-heading">
                <div className="card-title-style">
                  New Negative Cases (Daily){" "}
                  <GrStatusGood className="icon-styled" size="1.5rem" />
                </div>
              </div>
              <div className="card-value">
                <span className="card-data-style">
                  {this.state.countyData.negNew.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="card grid-card">
              <div className="card-heading">
                <div className="card-title-style">
                  Tests Adminstered (Daily){" "}
                  <GrBarChart className="icon-styled" size="1.5rem" />
                </div>
              </div>
              <div className="card-value">
                <span className="card-data-style">
                  {this.state.countyData.newTests.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* THIRD ROW  */}
        <MapSection />
      </div>
    );
  }
}

export default DataSection;

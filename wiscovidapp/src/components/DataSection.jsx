import React from "react";
import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import maps from 'fusioncharts/fusioncharts.maps';
import Wi from 'fusioncharts/maps/es/fusioncharts.wisconsin';
import ReactFusionCharts from 'react-fusioncharts';
import axios from 'axios';
import './map-theme';

// create fusion charts instance
ReactFusionCharts.fcRoot(FusionCharts, charts, maps, Wi);

// create axios instance
const api = axios.create({
  baseURL: "https://services1.arcgis.com/ISZ89Z51ft1G16OK/ArcGIS/rest/services/COVID19_WI/FeatureServer/10/query?where=NAME=" + 
    "%27Dane%27&outFields=NEGATIVE,POSITIVE,DEATHS,POS_NEW,NEG_NEW,TEST_NEW,NAME&outSR=4326&f=json"
});

// configure wisconsin map
const wiMap = {
  type: 'maps/wisconsin',
  width: '100%',
  height: '650%',
  dataFormat: 'json',
  dataSource: {
    chart: {
      theme: 'wistheme'
    }
  }
};

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
      name: '',
      dailyChange: 0
    } 
  };

  // get covid data from api
  componentDidMount() {
    api.get('').then(data => {  
      let respData;
      let temp = data.data.features;
      let currLength = temp.length - 1;
      respData = temp[currLength].attributes;
      
      this.setState( prevState => {
        let countyData = Object.assign({}, prevState.countyData);
        countyData['negative'] = respData.NEGATIVE;
        countyData['positive'] = respData.POSITIVE;
        countyData['deaths'] = respData.DEATHS;
        countyData['posNew'] = respData.POS_NEW;
        countyData['negNew'] = respData.NEG_NEW;
        countyData['testNew'] = respData.TEST_NEW;
        countyData['name'] = respData.NAME;
        countyData['dailyChange'] = respData.POS_NEW - temp[currLength-1].attributes.POS_NEW;
        return { countyData };
      });  
    }).catch(error => {
      alert("Something went wrong, please reload the page");
    });
  };


  render() {

    let caseChange;
    if (this.state.countyData.dailyChange > 0) {
      caseChange = <span className="card-data-style">{'+' + this.state.countyData.dailyChange.toLocaleString()}</span>;
    } else {
      caseChange = <span className="card-data-style">{this.state.countyData.dailyChange.toLocaleString()}</span>;
    }

    return (
      <div className="container-fluid">
        {/* FIRST ROW */}
        <div className="row justify-content-center row-styled">
          <div className="col-lg-3 col-sm-6">
            <div className="card grid-card">
              <div className="card-heading">
                <div className="card-title-style">Positive Cases (Total)</div>
              </div>
              <div className="card-value">
                <span className="card-data-style">{this.state.countyData.positive.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="card grid-card">
              <div className="card-heading">
                <div className="card-title-style">Negative Cases (Total)</div>
              </div>
              <div className="card-value">
                <span className="card-data-style">{this.state.countyData.negative.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="card grid-card">
              <div className="card-heading">
                <div className="card-title-style">Total Deaths</div>
              </div>
              <div className="card-value">
                <span className="card-data-style">{this.state.countyData.deaths.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* SECOND ROW */}
        <div className="row justify-content-center row-styled">
          <div className="col-lg-3 col-sm-6">
            <div className="card grid-card">
              <div className="card-heading">
                <div className="card-title-style">New Positive Cases (Daily)</div>
              </div>
              <div className="card-value">
                <span className="card-data-style">{this.state.countyData.posNew.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="card grid-card">
              <div className="card-heading">
                <div className="card-title-style">New Negative Cases (Daily)</div>
              </div>
              <div className="card-value">
                <span className="card-data-style">{this.state.countyData.negNew.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="card grid-card">
              <div className="card-heading">
                <div className="card-title-style">Change in Daily Positive Cases</div>
              </div>
              <div className="card-value">
                {caseChange}
              </div>
            </div>
          </div>
        </div>

        {/* THIRD ROW  */}
        <div className="row justify-content-center row-styled">

          <div className="col-md-5">
            <div className="card grid-card">
              <div className="chart-container">
                <ReactFusionCharts
                    {...wiMap}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DataSection;

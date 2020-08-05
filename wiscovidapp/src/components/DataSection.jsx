import React from "react";
import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import maps from 'fusioncharts/fusioncharts.maps';
import Wi from 'fusioncharts/maps/es/fusioncharts.wisconsin';
import ReactFusionCharts from 'react-fusioncharts';

ReactFusionCharts.fcRoot(FusionCharts, charts, maps, Wi);

const dataSource = {
    chart: {
      yaxisname: "Number of Tests",
      xaxisname: "Date of Test",
      aligncaptionwithcanvas: "0",
      theme: "fusion",
      showBorder: "0",
      bgColor: "#202a3b",
      bgAlpha: "100",
      baseFontColor: "#FFFFFF",
      chartTopMargin: "95",
      baseFontSize: "16",
      yAxisMaxValue: "20"
    },
    data:  [{
      "label": "Jan",
      "value": "3"
    },
    {
      "label": "Feb",
      "value": "4"
    },
    {
      "label": "Mar",
      "value": "5"
    },
  ]
};

class DataSection extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        {/* FIRST ROW */}
        <div className="row justify-content-center row styled">
          <div className="col-lg-3 col-sm-6">
            <div className="card grid-card">
              <div className="card-heading">
                <div>Positive Cases</div>
              </div>
              <div className="card-value">
                <span>0</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="card grid-card">
              <div className="card-heading">
                <div>Negative Cases</div>
              </div>
              <div className="card-value">
                <span>0</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="card grid-card">
              <div className="card-heading">
                <div>Total Deaths</div>
              </div>
              <div className="card-value">
                <span>0</span>
              </div>
            </div>
          </div>
        </div>

        {/* SECOND ROW */}
        <div className="row justify-content-center row-styled">
          <div className="col-lg-3 col-sm-6">
            <div className="card grid-card">
              <div className="card-heading">
                <div>New Positive Cases</div>
              </div>
              <div className="card-value">
                <span>0</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="card grid-card">
              <div className="card-heading">
                <div>New Negative Cases</div>
              </div>
              <div className="card-value">
                <span>0</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="card grid-card">
              <div className="card-heading">
                <div>% Change in Daily Positive Cases</div>
              </div>
              <div className="card-value">
                <span>0</span>
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
                    type="maps/wisconsin"
                    width="100%"
                    height="425%"
                    dataFormat="json"
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

import React from "react";
import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import maps from 'fusioncharts/fusioncharts.maps';
import Wi from 'fusioncharts/maps/es/fusioncharts.wisconsin';
import ReactFusionCharts from 'react-fusioncharts';

ReactFusionCharts.fcRoot(FusionCharts, charts, maps, Wi);

const dataSource = {
    chart: {
      caption: "Lead sources by industry",
      yaxisname: "Number of Leads",
      aligncaptionwithcanvas: "0",
      plottooltext: "<b>$dataValue</b> leads received",
      theme: "fusion"
    },
    data: [
      {
        label: "Travel & Leisure",
        value: "41"
      },
      {
        label: "Advertising/Marketing/PR",
        value: "39"
      },
      {
        label: "Other",
        value: "38"
      }
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
                <div>% Change in Current Positive Cases</div>
              </div>
              <div className="card-value">
                <span>0</span>
              </div>
            </div>
          </div>
        </div>

        {/* THIRD ROW  */}
        <div className="row justify-content-center row-styled">
          <div className="col-lg-3 col-sm-6">
            <div className="card grid-card">
              <div className="chart-container">
                  <ReactFusionCharts 
                    type="bar2d"
                    width="100%"
                    height="250%"
                    dataFormat="JSON"
                    dataSource={dataSource}
                  />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card grid-card">
              <div className="chart-container">
                <ReactFusionCharts 
                      type="maps/wisconsin"
                      width="100%"
                      height="100%"
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

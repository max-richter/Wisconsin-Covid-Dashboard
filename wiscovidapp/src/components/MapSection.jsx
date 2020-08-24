import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import maps from "fusioncharts/fusioncharts.maps";
import Wi from "fusioncharts/maps/es/fusioncharts.wisconsin";
import ReactFusionCharts from "react-fusioncharts";
import './map-theme';

// create fusion charts instance
ReactFusionCharts.fcRoot(FusionCharts, charts, maps, Wi);

// configure wisconsin map
const wiMap = {
  type: "maps/wisconsin",
  width: "100%",
  height: "650%",
  dataFormat: "json",
  dataSource: {
    chart: {
      theme: "wistheme",
    },
    data: [
      {
        id: "025",
        value: "500Cases",
      },
    ],
  },
};

class MapSection extends React.Component {
  render() {
    return (
      <div className="row justify-content-center row-styled">
        <div className="col-md-5">
          <div className="card grid-card">
            <div className="chart-container">
              <ReactFusionCharts {...wiMap} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MapSection;
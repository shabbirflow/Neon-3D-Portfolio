import React from "react";
import ReactDOM from "react-dom";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from "react-simple-maps";

// import "./styles.css";

const MapChart = () => {
  return (
    <ComposableMap style={{ width: "100%", height: "100%" }} projectionConfig = {
      {scale: 450, 
      center: [74, 20],
      rotate: [30.0, -10.0, 0],
    }
    }>
      <Geographies geography="/features.json">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography fill="#30AADD" key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[75.3522, 18.8566]}
        dx={-90}
        dy={-50}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Pune"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default MapChart;

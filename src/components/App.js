import React, { Component } from 'react';
import '../App.css';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import MainMenu from './MainMenu';

const Map = ReactMapboxGl({ accessToken: 'pk.eyJ1IjoiY2hhcnV0aXdhcmkwNCIsImEiOiJjam01ZmRsYWMweDY2M2trY2NhaHpjeDNzIn0.XmdHPbnuEAfQurPlDUO5Ew' });

class App extends Component {
  render() {
    return (
      <div className="main">
      <MainMenu />
      <Map id="map"
      style="mapbox://styles/mapbox/dark-v9"
      containerStyle={{
        height: "100vh",
        width: "100vw"
      }}>
        <Layer
          type="symbol"
          id="marker"
          layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[37.368832, -122.036346]}/>
        </Layer>
    </Map>
    </div>
    );
  }
}

export default App;

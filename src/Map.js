import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyDQBgdAsAfdz2TI2hK8l08aLxw5G_YTvbA"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={15.5299977}
            lng={73.7623589}
            text="Goa Dental Studio"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;
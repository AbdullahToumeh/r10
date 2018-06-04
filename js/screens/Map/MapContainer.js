import React, { Component } from 'react';
import { Text, View } from 'react-native';
import MapView from 'react-native-maps';

class MapContainer extends Component {
  render() {
    return (
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    );
  }
}

export default MapContainer;


// GOOGLE MAPS IOS KEY = AIzaSyB4ssSLLcikHR_DPkU5kD8QdGZ-HuyjHf8
// GOOGLE MAPS ANDROID KEY = AIzaSyB4ssSLLcikHR_DPkU5kD8QdGZ-HuyjHf8
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import Axios from 'axios';
import LoadingBox from '../components/LoadingBox';
import {
    LoadScript, GoogleMap,
    StandaloneSearchBox,
    Marker
} from '@react-google-maps/api';
import { USER_ADDRESS_MAP_CONFIRM } from '../constants/userConstants';

const libs = ['places'];
const defaultLocation = { lat: -26.111650, lng: 27.848190 };

export default function MapScreen() {
    const [googleApiKey, setGoogleApiKey] = useState('')
    const [center, setCenter] = useState(defaultLocation);
    const [location, setLocation] = useState(center);

    const mapRef = useRef(null);
    const placeRef = useRef(null);
    const markerRef = useRef(null);


    useEffect(() => {
        const fetch = async () => {
            const { data } = await Axios('api/config/google');
            setGoogleApiKey(data);
            getUserCurrentLocation();

        }
        fetch();
    }, [])

    const onLoad= (map) => {
        mapRef.current = map;
    };
    const onMarkerLoad= (marker) => {
        markerRef.current = marker;
    };
    const onLoadPlaces = (place) => {
        placeRef.current = place;
    };

    const onIdle = () => {
        setLocation({
            lat: mapRef.current.center.lat(),
            lng: mapRef.current.center.lng(),
        })
    };
    const onPlacesChanged = () => {
        const place = placeRef.current.getPlaces()[0].geometry.location;
        setLocation({ lat: place.lat(), lng: place.lng() });
    };

    const dispatch = useDispatch();

    const onConfirm = () => {
        const places = placeRef.current.getPlaces();
        if (places && places.length === 1) {
            //dispatch select action
            dispatch({
                type: USER_ADDRESS_MAP_CONFIRM,
                payload: {
                    lat: location.lat,
                    lng: location.lng,
                    address: places[0].formatted_address,
                    name: places[0].name,
                    vicinity: places[0].vicinity,
                    googleAddressId: places[0].id,
                },
            });
            alert('location selected successfully')
        } else {
            alert('Please enter your address')
        }
    };

    const getUserCurrentLocation = () => {
      if(!navigator.geolocation) {
       alert("Please enable location services")
      } else {
          navigator.geolocation.getCurrentPosition((position) => {
              setCenter({
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
              });
              setLocation({
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
              });
          })
      }
    }
  return googleApiKey ?
    <div className="full-container">
          <LoadScript libraries={libs} googleMapsApiKey={googleApiKey}>
              <GoogleMap
                  id="sample-map"
                  mapContainerStyle={{ height: '100%', width: '100%' }}
                  center={center}
                  zoom={15}
                  onLoad={onLoad}
                  onidle={onIdle}>

                  <StandaloneSearchBox
                     onLoad={onLoadPlaces}
                      onPlacesChanged={onPlacesChanged}>
                  <Marker position={location} onLoad={onMarkerLoad}></Marker>
                      <div>
                          <input type="text" placeholder="Enter Address"></input>
                          <button type="button" className="primary" onClick={onConfirm}>Confirm</button>
                      </div>

                  </StandaloneSearchBox>

              </GoogleMap>
          </LoadScript>
    </div>
  : <LoadingBox></LoadingBox>
}

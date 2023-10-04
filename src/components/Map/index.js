import React, { memo, useCallback, useState } from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'

const containerStyle = {
   width: '100%',
   height: '100%',
   borderRadius: '10px',
}
const center = {
   lat: 16.059087,
   lng: 108.205813,
}

function Map({ onChildData }) {
   const [lat, setLat] = useState(16.059087)
   const [lng, setLng] = useState(108.205813)
   const [map, setMap] = useState(null)

   const [dataToSend, setDataToSend] = useState('')
   const sendDataToParent = () => {
      // Gọi hàm callback để truyền giá trị lên component cha
      onChildData(dataToSend)
   }

   const OPTIONS = {
      minZoom: 4,
      maxZoom: 18,
   }
   const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: 'AIzaSyB_o0aJQDa945krcRzTGB0sBKGuq15RNBM',
   })
   const onLoad = useCallback(function callback(map) {
      // This is just an example of getting and using the map instance!!! don't just blindly copy!
      const bounds = new window.google.maps.LatLngBounds(center)
      map.fitBounds(bounds)

      setMap(map)
   }, [])
   const onUnmount = useCallback(function callback(map) {
      setMap(null)
   }, [])

   return isLoaded ? (
      <GoogleMap
         mapContainerStyle={containerStyle}
         center={center}
         options={OPTIONS}
         onLoad={onLoad}
         onUnmount={onUnmount}
         onClick={(ev) => {
            console.log('latitide = ', ev.latLng.lat())
            console.log('longitude = ', ev.latLng.lng())
            setLat(ev.latLng.lat())
            setLng(ev.latLng.lng())
            setDataToSend([ev.latLng.lat(), ev.latLng.lng()])
            sendDataToParent()
         }}
      >
         <Marker position={{ lat: lat, lng: lng }} animation={2} />
      </GoogleMap>
   ) : (
      <></>
   )
}

export default memo(Map)

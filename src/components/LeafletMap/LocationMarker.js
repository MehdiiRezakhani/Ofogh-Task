import { Marker, Popup, useMapEvents } from "react-leaflet";

function LocationMarker({ setPosition, position }) {
  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng);
      map.locate();
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}
export default LocationMarker;

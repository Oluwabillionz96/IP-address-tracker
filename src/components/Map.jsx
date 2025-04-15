import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import ChangeView from "../logics/changeView";
const Map = ({ coordinates = [48.8566, 2.3522] }) => {
  const customIcon = new Icon({
    iconUrl: "./icon-location.svg",
    iconSize: [40, 40],
  });
  return (
    <MapContainer center={coordinates} zoom={17}>
      <ChangeView coords={coordinates} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={coordinates}
        icon={customIcon}
        children={<Popup>THis is the location</Popup>}
      />
    </MapContainer>
  );
};

export default Map;

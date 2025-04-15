import { useMap } from "react-leaflet";
import { useEffect } from "react";

const ChangeView = ({ coords }) => {
  const map = useMap();

  useEffect(() => {
    map.setView(coords);
  }, [coords]);

  return null;
};

export default ChangeView;

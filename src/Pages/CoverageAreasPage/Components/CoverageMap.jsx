import "leaflet/dist/leaflet.css";
import { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";

// Leaflet default icons fix
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function CoverageMap({ data }) {
  const mapRef = useRef(null);

  return (
    <div className="rounded-xl overflow-hidden">
      <MapContainer
        whenCreated={(map) => {
          mapRef.current = map;

          // 🔥 Fix: map rendering issue on scroll/resize
          setTimeout(() => {
            map.invalidateSize();
          }, 200);
        }}
        center={
          data?.length
            ? [data[0].latitude, data[0].longitude]
            : [23.8006, 90.3547]
        }
        zoom={14}
        style={{ height: "400px", width: "100%" }}
        attributionControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {data?.map((area, index) => (
          <Marker
            key={index}
            position={[area.latitude, area.longitude]}
            icon={DefaultIcon}
          >
            <Popup>
              <div className="text-sm font-medium">
                {area.areaName || "Service Area"}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

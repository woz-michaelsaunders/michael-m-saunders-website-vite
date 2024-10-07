import * as React from "react";

import { Map, MapLayers, MapShapeLayer, MapTileLayer, MapMarkerLayer } from '@progress/kendo-react-map';
const center = [25.276987, 55.296249];
const tileSubdomains = ['a', 'b', 'c'];
const tileUrl = e => `https://${e.subdomain}.tile.openstreetmap.org/${e.zoom}/${e.x}/${e.y}.png`;
const attribution = '&copy; <a href="https://osm.org/copyright">OpenStreetMap contributors</a>';
const geoShapes = [{
    type: 'Polygon',
    coordinates: [
        // Note that GeoJSON coordinates are listed as Longitude, Latitude (X, Y).
        // Map locations are typically listed as Latitude, Longitude as in the other Map properties.
        [[-97.7409, 30.2675], [-97.7409, 30.2705], [-97.7490, 30.2707], [-97.7494, 30.2686], [-97.7409, 30.2675]]]
}];
const shapeStyle = {
    fill: {
        color: '#fff',
        opacity: 0.5
    },
    stroke: {
        width: 3,
        color: '#bbb'
    }
};
const markers = [{
    latlng: [30.2675, -97.7409],
    name: 'Zevo Toys'
}, {
    latlng: [30.2707, -97.7490],
    name: 'Foo Bars'
}, {
    latlng: [30.2705, -97.7409],
    name: 'Mainway Toys'
}, {
    latlng: [30.2686, -97.7494],
    name: 'Acme Toys'
}];
const MapContainer = () =>
    <div style={{ width: '75vw', height: '75vh', margin: '0 auto', overflow: 'hidden' }}>

    <Map center={center} zoom={15} style={{ height: '100%' }}>
        <MapLayers>
            <MapTileLayer urlTemplate={tileUrl} subdomains={tileSubdomains} attribution={attribution} />
            <MapShapeLayer data={geoShapes} style={shapeStyle} />
            <MapMarkerLayer data={markers} locationField="latlng" titleField="name" />
        </MapLayers>
    </Map>
</div>;
export default MapContainer;
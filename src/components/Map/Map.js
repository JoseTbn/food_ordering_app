import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function Map() {
    const position = [51.505, -0.09];
  return (
      <div className='p-10'>
    <MapContainer className= 'h-96'center={[51.505, -0.09]} zoom={5}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={position}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
</div>
  )
}

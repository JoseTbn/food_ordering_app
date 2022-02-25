import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function Map() {
    const position = [50.850, 4.35];
  return (
      <div className='p-20 '>
    <MapContainer className= 'h-96  'center={[50.850, 4.35]} zoom={10}>
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

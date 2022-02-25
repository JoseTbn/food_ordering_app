import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function Map() {
    const position = [50.850, 4.35];
  return (
    <> 
      <div className='p-20 bg-gray-100 '>
<h2 className=' text-left text-4xl font-bold pb-10' >Fresh from the Kitchen</h2>

    <MapContainer className= 'h-[600px]  'center={[50.850, 4.35]} zoom={14}>
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
</>
  )
}

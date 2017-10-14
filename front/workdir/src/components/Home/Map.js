import React from 'react'
import { Map, Marker } from 'yandex-map-react'


export const ZMap = () => (
  <div className='Map Border'>
    <Map
      // onAPIAvailable={function () { console.log('API loaded'); }}
      width={'100%'}
      height={315}
      // center={[55.909555, 37.730296]}
      center={[55.909362, 37.726863]}
      zoom={12}
      // style={{border: 'solid 1px #419641', overflow: 'hidden'}}
      >
        <Marker
          lat={55.899526}
          lon={37.713817}
        />
        <Marker
          lat={55.908109}
          lon={37.723430}
        />
    </Map>
  </div>
)


export default ZMap

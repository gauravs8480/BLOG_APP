import { IKImage } from 'imagekitio-react'
import React from 'react'

function Image({src,className,w,h,alt}) {
  return (
    <IKImage urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOIN} path={src} alt={alt} className={className} loading='lazy'   lqip={{ active:true ,quality:20}} 
    
    width={w}
    height={h}
    transformation={[{
        width:w,
        height:h,
    }]}
    />
  )
}

export default Image
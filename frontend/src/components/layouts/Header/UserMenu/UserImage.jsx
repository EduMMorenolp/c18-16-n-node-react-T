import React from 'react'

export default function UserImage({src}) {
  return ( 
    <img 
      className="rounded-full" 
      height={35} 
      width={35} 
      alt="Imagen usuario" 
      src={src || '/placeholder.jpg'}
    />
   );
}

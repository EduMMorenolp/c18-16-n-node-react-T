import React from 'react'

export default function UserImage({src}) {
  return ( 
    <img 
      className="rounded-full" 
      height={40} 
      width={40} 
      alt="Imagen usuario" 
      src={src || '/placeholder.jpg'}
    />
   );
}

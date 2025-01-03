import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { Key } from 'react';

export function ImageDisplayer ({images, size, imageSize} : {images: string[], size: string, imageSize:number}) { //transition-all hover:scale-125 
  var css = "columns-"+size+" gap-2"
  return ( //grid grid-flow-row auto-rows-max
    <div className = {css}>
      {images.map((src: string | StaticImport, index: Key | null | undefined) => (
          <Image className = "mb-2 h-auto max-w-fill transition-all hover:scale-110" src={src} alt={`cat ${index}`} width={1000} height={1000} key={index} />
      ))}
    </div>
  );

}
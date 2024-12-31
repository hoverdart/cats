import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { Key } from 'react';

export function ImageDisplayer ({images, size} : {images: string[], size: number}) { //transition-all hover:scale-125 
  return (
    <div className = "grid grid-flow-row auto-rows-max">
      {images.map((src: string | StaticImport, index: Key | null | undefined) => (
        <div key={index} style={{ margin: '2px' }} className = "transition-all hover:scale-110"> 
          <Image className = "h-auto max-w-full" src={src} alt={`cat ${index}`} width={size} height={size} />
        </div>
      ))}
    </div>
  );

}
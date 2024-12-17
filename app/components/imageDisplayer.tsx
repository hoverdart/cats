//import fs from 'fs';
//import path from 'path';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { Key } from 'react';


export function ImageDisplayer ({images} : {images: string[]}) {

  return (
    <div className = "grid gap-2">
    <>
      {images.map((src: string | StaticImport, index: Key | null | undefined) => (
        <div key={index} style={{ margin: '2px' }} className = "transition-all hover:scale-125">
          <Image className = "h-auto max-w-full" src={src} alt={`cat ${index}`} width={600} height={600} />
        </div>
      ))}
    </>
    </div>
  );

}
import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { Key } from 'react';


export function ImageDisplayer ({images} : {images: string[]}) {

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap',justifyContent: 'center' }}>
      {images.map((src: string | StaticImport, index: Key | null | undefined) => (
        <div key={index} style={{ margin: '5px' }} className = "transition-all hover:scale-125">
          <Image src={src} alt={`cat ${index}`} width={300} height={300} />
        </div>
      ))}
    </div>
  );

}
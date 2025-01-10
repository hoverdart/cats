import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { Key } from 'react';
import { GiHollowCat } from 'react-icons/gi';

export function ImageDisplayer ({images, size, imageSize} : {images: string[], size: string, imageSize:number}) {
  var css = "columns-"+size+" gap-2 select-none";
  const openImage = (src: string) => {
    window.open(src, '_blank');
  };
  const downloadImage = (src: string, index: Key) => {
    const link = document.createElement('a');
    link.href = src;
    link.download = `cat-${index}`; // Set the file name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className={css}>
      {images.map((src: string | StaticImport, index: Key | null | undefined) => (
        <div className="relative mb-2 h-auto max-w-fill transition-all hover:scale-110" key={index}>
          <Image src={src} alt={`cat ${index}`} width={1000} height={1000} className="w-full h-auto"/>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-25" onDoubleClick={() => openImage(src as string)}>
            <GiHollowCat className="text-white text-2xl cursor-pointer hover:text-gray-200" onClick={() => downloadImage(src as string, index as Key)} />
          </div>
        </div>
      ))}
    </div>
  );
}

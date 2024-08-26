import fs from 'fs';
import path from 'path';
import Image from 'next/image';

export default function brucie() {
  // Define the path to the images directory
  const imagesDirectory = path.join(process.cwd(), 'public/brucePics');

  // Get the filenames of all images in the directory
  const filenames = fs.readdirSync(imagesDirectory);

  // Create an array of image URLs
  const images = filenames.map((filename) => `/brucePics/${filename}`);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap',justifyContent: 'center' }}>
      {images.map((src, index) => (
        <div key={index} style={{ margin: '5px' }}>
          <Image src={src} alt={`Bruce ${index}`} width={150} height={150} />
        </div>
      ))}
    </div>
  );
}

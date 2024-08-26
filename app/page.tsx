import fs from 'fs';
import path from 'path';
import Image from 'next/image';

export default function allTheCuties() {
  function shuffle(array: any) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }
  
  // Define the path to the images directory
  const clarkDir = path.join(process.cwd(), 'public/clarkPics');
  const bruceDir = path.join(process.cwd(), 'public/brucePics');

  // Get the filenames of all images in the directory
  const clarkFiles = fs.readdirSync(clarkDir);
  const bruceFiles = fs.readdirSync(bruceDir);

  // Create an array of image URLs
  var clarkie = clarkFiles.map((filename) => `/clarkPics/${filename}`);
  var brucie = bruceFiles.map((filename) => `/brucePics/${filename}`);

  //Combine Arrays
  var clarkieAndBrucie = [];
  for (var i = 0; i < clarkie.length; i++) {
    clarkieAndBrucie.push(clarkie[i]); 
  }
  for (var i = 0; i < brucie.length; i++) {
    clarkieAndBrucie.push(brucie[i]); 
  }
  shuffle(clarkieAndBrucie);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
      {clarkieAndBrucie.map((src, index) => (
        <div key={index} style={{ margin: '5px' }}>
          <Image src={src} alt={`Bruce ${index}`} width={150} height={150} />
        </div>
      ))}
    </div>
  );
}

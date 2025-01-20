const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

//Removes Metadata from images, Deletes Original image, Takes New Name
const removeMetadataAndRename = async (folderPath, baseName) => {
  const files = fs.readdirSync(folderPath);
  let index = 1;

  for (const file of files) {
    const filePath = path.join(folderPath, file);

    // Process only image files (e.g., jpg, jpeg, png)
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      try {
        const newFileName = `${baseName}${index}.jpeg`; // Change extension as needed
        const newFilePath = path.join(folderPath, newFileName);

        await sharp(filePath)
        .withExif({
            IFD0: {
              RandomKey: `Value${Math.floor(Math.random() * 1000)}`,
              AnotherKey: `AnotherValue${Math.floor(Math.random() * 500)}`,
            },
            IFD1: {
              MysteryData: `Mystery${Math.floor(Math.random() * 9999)}`,
            },
          })
          .toFormat('jpeg') // Ensure output is in png format
          .toBuffer()
          .then((data) => {
            // Save the processed image with the new name
            fs.writeFileSync(newFilePath, data);
            fs.unlink(filePath,function(err){
                if(err) return console.log(err);
                console.log('Old File NOT Deleted');
            });  
            console.log(`Metadata removed and file saved as: ${newFileName}`);
          });

        index++; // Increment index for next file
      } catch (error) {
        console.error(`Failed to process file ${file}:`, error);
      }
    }
  }
};

//To Run in Console: node ./app/components/images
removeMetadataAndRename('/workspaces/cats/public/brucePics', 'bruce');
removeMetadataAndRename('/workspaces/cats/public/clarkPics', 'clark');
removeMetadataAndRename('/workspaces/cats/public/dianaPics', 'diana');

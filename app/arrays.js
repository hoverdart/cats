import fs from 'fs';
import path from 'path';

const clarkDir = path.join(process.cwd(), 'public/clarkPics');
const bruceDir = path.join(process.cwd(), 'public/brucePics');
const dianaDir = path.join(process.cwd(), 'public/dianaPics');
const bothDir = path.join(process.cwd(), 'public/bothTheCatPics');

// Get the filenames of all images in the directory
const clarkFiles = fs.readdirSync(clarkDir);
const bruceFiles = fs.readdirSync(bruceDir);
const dianaFiles = fs.readdirSync(dianaDir);
const bothFiles = fs.readdirSync(bothDir);

// Create an array of image URLs
var clarkie = clarkFiles.map((filename) => `/clarkPics/${filename}`);
var brucie = bruceFiles.map((filename) => `/brucePics/${filename}`);
var dianaa = dianaFiles.map((filename) => `/dianaPics/${filename}`);
var all = bothFiles.map((filename) => `/bothTheCatPics/${filename}`);

//Combine Arrays to form mega array
var clarkieAndBrucie = [];
for (var i = 0; i < clarkie.length; i++) {
    clarkieAndBrucie.push(clarkie[i]); 
}
for (var i = 0; i < brucie.length; i++) {
    clarkieAndBrucie.push(brucie[i]); 
}
for (var i = 0; i < dianaa.length; i++) {
    clarkieAndBrucie.push(dianaa[i]); 
}
for (var i = 0; i < all.length; i++) {
    clarkieAndBrucie.push(all[i]); 
}

export const clark = clarkie;
export const bruce = brucie;
export const diana = dianaa;
export const allPics = clarkieAndBrucie;
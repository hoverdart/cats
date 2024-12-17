import fs from 'fs';
import path from 'path';
import { ImageDisplayer } from "./components/imageDisplayer";
import { allPics } from './arrays';

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
export default function allTheCuties() {
  var clarkieAndBrucie = [];
  for (var i = 0; i < allPics.length; i++) {
    clarkieAndBrucie.push(allPics[i]); 
  }
  shuffle(clarkieAndBrucie);

  //I'm gonna do 6 columns
  var column1 = [];
  var column2 = [];
  var column3 = [];
  var column4 = [];

  // Split images evenly across 4 columns
  for (var i = 0; i < clarkieAndBrucie.length; i++) {
    if (i % 4 === 0) {
      column1.push(clarkieAndBrucie[i]);
    } else if (i % 4 === 1) {
      column2.push(clarkieAndBrucie[i]);
    } else if (i % 4 === 2) {
      column3.push(clarkieAndBrucie[i]);
    } else {
      column4.push(clarkieAndBrucie[i]);
    }
  }
  return (
    <div className = "grid grid-cols-2 md:grid-cols-4 gap-1 ">
        <ImageDisplayer images={column1} />
        <ImageDisplayer images={column2} />
        <ImageDisplayer images={column3} />
        <ImageDisplayer images={column4} />
    </div>  
  );
}

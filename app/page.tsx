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
  shuffle(allPics);

  return (
    <ImageDisplayer images={allPics} />
  );
}

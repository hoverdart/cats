import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import { ImageDisplayer } from "../components/imageDisplayer";
import { clark } from '../arrays';

export default function clarkie() {

  var column1 = [];
  var column2 = [];
  var column3 = [];
  var column4 = [];

  for (var i = 0; i < clark.length; i++) {
    if (i % 4 === 0) {
      column1.push(clark[i]);
    } else if (i % 4 === 1) {
      column2.push(clark[i]);
    } else if (i % 4 === 2) {
      column3.push(clark[i]);
    } else {
      column4.push(clark[i]);
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

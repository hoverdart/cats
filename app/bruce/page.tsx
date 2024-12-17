import fs from 'fs';
import path from 'path';
import { ImageDisplayer } from "../components/imageDisplayer";
import { bruce } from '../arrays';

export default function brucie() {
  var column1 = [];
  var column2 = [];
  var column3 = [];
  var column4 = [];

  for (var i = 0; i < bruce.length; i++) {
    if (i % 4 === 0) {
      column1.push(bruce[i]);
    } else if (i % 4 === 1) {
      column2.push(bruce[i]);
    } else if (i % 4 === 2) {
      column3.push(bruce[i]);
    } else {
      column4.push(bruce[i]);
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

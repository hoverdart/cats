import fs from 'fs';
import path from 'path';
import { ImageDisplayer } from "../components/imageDisplayer";
import { bruce } from '../arrays';

export default function brucie() {
  return (
    <>
      <ImageDisplayer images={bruce} />
    </>
  );
}

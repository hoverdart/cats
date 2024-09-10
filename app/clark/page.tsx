import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import { ImageDisplayer } from "../components/imageDisplayer";
import { clark } from '../arrays';

export default function clarkie() {
  return (
    <>
      <ImageDisplayer images={clark} />
    </>
  );
}

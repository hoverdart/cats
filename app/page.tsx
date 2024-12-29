import { MasterDisplayer } from "./components/MasterDisplayer"
import { allPics } from './arrays';

export default function allTheCuties() {
  return (
    <MasterDisplayer images={allPics} />
  );
}

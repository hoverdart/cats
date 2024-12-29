import {ImageDisplayer} from "./imageDisplayer"

function shuffle(array: any) {
    let currentIndex = array.length;
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
}

export function MasterDisplayer ({images} : {images: string[]}) { //Displays all the displayers, splitting the images into 4 columns
    shuffle(images)
    var column1 = [];
    var column2 = [];
    var column3 = [];
    var column4 = [];
    // Split images evenly across 4 columns
    for (var i = 0; i < images.length; i++) {
        if (i % 4 == 0) {
            column1.push(images[i]);
        } else if (i % 4 == 1) {
            column2.push(images[i]);
        } else if (i % 4 == 2) {
            column3.push(images[i]);
        } else {
            column4.push(images[i]);
        }
    }
    return (
        <div className = "grid grid-flow-col auto-cols-*">
            <ImageDisplayer images={column1} />
            <ImageDisplayer images={column2} />
            <ImageDisplayer images={column3} />
            <ImageDisplayer images={column4} />
        </div>  
    );
}
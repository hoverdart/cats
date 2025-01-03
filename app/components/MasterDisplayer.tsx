"use client"; // This is a client component 👈🏽
import {ImageDisplayer} from "./imageDisplayer"
import {Navbar} from "./nav"
import React, { useState } from 'react';

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
    const [size, setSize] = useState(3)
    if(size == 1){
        shuffle(images)
    }
    var colString = ["3xs", "2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl"];
    var cols = colString[size-1]
    console.log(cols)
    return ( //grid grid-flow-col auto-cols-*
        <>
        <Navbar changeSize = {(value: number) => {setSize(value)}}/>
        <div className = "">
            <ImageDisplayer images={images} size={cols} />
        </div>  
        </>
    );
}
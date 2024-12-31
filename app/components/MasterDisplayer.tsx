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
    const [size, setSize] = useState(600)
    if(size == 600){
        shuffle(images)
    }
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
        <>
        <Navbar changeSize = {(value: number) => {setSize(value)}}/>
        <div className = "grid grid-flow-col auto-cols-*">
            <ImageDisplayer images={column1} size={size} />
            <ImageDisplayer images={column2} size={size} />
            <ImageDisplayer images={column3} size={size} />
            <ImageDisplayer images={column4} size={size} />
        </div>  
        </>
        
    );
}
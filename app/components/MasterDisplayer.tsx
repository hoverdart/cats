"use client"; // This is a client component 👈🏽
import {ImageDisplayer} from "./imageDisplayer"
import {Navbar} from "./nav"
import 'bluesky-comments/bluesky-comments.css'
import { BlueskyComments } from 'bluesky-comments';
import {MdOutlineArrowCircleUp} from 'react-icons/md';
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
    const [size, setSize] = useState(3);
    const [shuffleVar, willShuffle] = useState(false);
    const [comments, showComments] = useState(false);

    if (shuffleVar){
        shuffle(images);
        willShuffle(!shuffleVar)
    }
    var colString = ["3xs", "2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl"];
    var cols = colString[size-1]
    return ( //<h1 className="font-extrabold dark:text-zinc-300 text-7xl/7 text-center justify-content-center mb-8">Cats!</h1>
        <>
        <Navbar changeSize = {(value: number) => {setSize(value)}} doShuffle={() => willShuffle(!shuffleVar)}/>
        <div className = "">
            <ImageDisplayer images={images} size={cols} imageSize ={size} />
        </div>  
        <div className="flex flex-col items-center justify-center content-center">
            <MdOutlineArrowCircleUp className="text-gray-800 text-3xl dark:text-gray-100 transition-all hover:scale-125 hover:text-green-500 " onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
            <h5 className="text-3xl mx-6 mb-6 font-bold text-gray-500 hover:text-green-500 pt-4 transition-all hover:scale-105 cursor-pointer" onClick={() => showComments(!comments)}>{comments ? "Hide" : "Reveal"} Comments</h5>
            {comments && <BlueskyComments className={`transition-opacity duration-900 ${comments ? 'opacity-100' : 'opacity-0'} ${comments ? 'block' : 'hidden'}`} uri="https://bsky.app/profile/shauryav.com/post/3lg5pj67td224"/>}
        </div>
        </>
    );
}
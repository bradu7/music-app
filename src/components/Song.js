import React from "react";

export function Song({currentSong}) {
    return (
        <div className="song">
            <img alt={currentSong.name} src={currentSong.cover}></img>
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
        </div>
    )
} 
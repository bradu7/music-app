import React from "react";


export function LibrarySong({song, songs, setCurrentSong, id, audioRef, isPlaying, setSongs}) {

    const songSelect = async () => {
       await setCurrentSong(song);
        
        const activeSongs = songs.map((song) => {
            if (song.id === id) {
                return {...song, active: true};
            } else {
                return {...song, active: false}
            };
        });
        setSongs(activeSongs);

        if(isPlaying) audioRef.current.play()

    }
    return (
        <div onClick={songSelect} className={`library-song ${song.active ? 'selected' : ""}`}>
            <img alt={song.name} src={song.cover}></img>
            <div className="description">
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
            </div>
        </div>
    )
} 
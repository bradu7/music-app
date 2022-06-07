import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleLeft,  faAngleRight, faPause, } from "@fortawesome/free-solid-svg-icons";



export function Player({audioRef, isPlaying, setIsPlaying, setSongInfo, songInfo, currentSong, songs, setCurrent, setSongs}) {


    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
            );
    };

    const dragButton = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value})
    }

    const skipButton = async (direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if(direction === 'skip-forward') {
            await setCurrent(songs[(currentIndex + 1) % songs.length]);
        } if(direction === 'skip-backward') {
            if((currentIndex - 1) % songs.length === -1){
                await setCurrent(songs[songs.length -1]);
                if(isPlaying) audioRef.current.play()
                return;
            }
            await setCurrent(songs[(currentIndex - 1) % songs.length]);
        }
        if(isPlaying) audioRef.current.play();
    } 

    useEffect(() => {
        const activeSongs = songs.map((song) => {
            if (song.id === currentSong.id) {
                return {...song, active: true};
            } else {
                return {...song, active: false}
            };
        });
        setSongs(activeSongs);
    }, [currentSong]);

    const playSong = () => {
        if (isPlaying){
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        } else {
            audioRef.current.play()
            setIsPlaying(!isPlaying);
        }
    }
    return (
        <div className="player">
            <div className="timer">
                <p>{getTime(songInfo.currentTime)}</p>
                <input min={0} max={songInfo.duration || 0} value={songInfo.currentTime} onChange={dragButton} type="range" />
                <p>{songInfo.duration ? getTime(songInfo.duration) : '0:00'}</p>
            </div>
            <div className="controller">
                <FontAwesomeIcon onClick={() => skipButton('skip-backward')} className="left" icon={faAngleLeft} size="2x"/>
                <FontAwesomeIcon className="play" icon={isPlaying ? faPause : faPlay} size="2x" onClick={playSong}/>
                <FontAwesomeIcon onClick={() => skipButton('skip-forward')} className="right" icon={faAngleRight} size="2x"/>
            </div>
            
        </div>
    )
} 
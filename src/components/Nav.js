import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

export function Nav({libraryStatus, setLibraryStatus}) {
  return (
    <div className='nav'>
        <h1>Music App</h1>
        <button onClick={() => setLibraryStatus(!libraryStatus)}>
            Playlist
            <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
        </button>
    </div>
  )
}


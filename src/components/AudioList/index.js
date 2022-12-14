import classNames from 'classnames/bind';
import styles from './AudioList.module.scss';
import { Songs } from '~/API/Songs';
import Audio from '../Audio';
import { useEffect } from 'react';
import { useState } from 'react';
import { Albums } from '~/API/Albums';

const cx = classNames.bind(styles);

function AudioList() {
    const [songs, setSongs] = useState(Songs);
    useEffect(() => {
        const path = window.location.pathname;
        console.log(path);
        if (path.includes('musicLibrary/albums/@')) {
            const id = path.slice(22);
            console.log(Albums.find((song) => song.id === id).Songs);
            setSongs(Albums.find((song) => song.id === id).Songs);
        }
        if (path.includes('musicLibrary/artists/@')) {
            const id = path.slice(23);
            console.log(Albums.find((song) => song.id === id).Songs);
            setSongs(Albums.find((song) => song.id === id).Songs);
        }
    }, []);
    return (
        <div className={cx('AudioList')}>
            {songs.map((song) => (
                <Audio key={song.id} song={song} />
            ))}
        </div>
    );
}

export default AudioList;

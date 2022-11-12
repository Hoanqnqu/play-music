import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import Sidebar from '../components/Sidebar';
import { useContext, useState } from 'react';
import MusicPlayer from '../components/MusicPlayer';
import { SongContext } from '~/hooks/SongContext';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    const [songsContainerOpen, setSongsContainerOpen] = useState(false);
    const [playAreaOpen, setPlayAreaOpen] = useState(false);
    const context = useContext(SongContext);

    const songPlayCurrent = context.song;

    return (
        <div className={cx('wrapper')}>
            <Sidebar />
            <div className={cx('playArea', { fullsite: playAreaOpen })}>
                <button
                    className={cx('btn-arrow')}
                    onClick={() => {
                        setPlayAreaOpen(!playAreaOpen);
                    }}
                >
                    +
                </button>
                <MusicPlayer song={songPlayCurrent} />
            </div>
            <div className={cx('SongsContainer', { fullsite: songsContainerOpen }, { hidden: playAreaOpen })}>
                <button
                    className={cx('btn-arrow')}
                    onClick={() => {
                        setSongsContainerOpen(!songsContainerOpen);
                    }}
                >
                    +
                </button>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;

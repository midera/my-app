import React from 'react';
import ReactPlayer from 'react-player';
import s from './Music.module.css';


const Music = () => {

    return (
        <div>

            <img className={s.boxMusic}
                 src="https://i.gifer.com/origin/ec/ec2cc02c120bfe9b02029b4a5506eae9.gif"
                 alt="img1"/>
            <div className={s.boxMusicPlayer}>
                <ReactPlayer url='https://www.youtube.com/watch?v=8WW_ZJxdU5g&list=RD8WW_ZJxdU5g&start_radio=1&rv=8WW_ZJxdU5g&t=16'/>

            </div>
        </div>
    );
};
export default Music;

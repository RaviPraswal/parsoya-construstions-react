
import React, { useRef } from 'react';
import Video from '../images/construction-site-view.mp4'
const VIDEO_PATH = '../images/construction-site-view.mp4';

const PlayerComponent = ({ src }) => {
    return (
        <div className="video-player">
            <video width="100%" controls>
                <source src={Video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {/* <ReactPlayer url={Video} type="video/mp4" controls="true"/> */}
        </div>
    );
}
export default PlayerComponent;
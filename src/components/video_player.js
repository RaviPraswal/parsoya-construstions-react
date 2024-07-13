import React, { useRef, useEffect } from 'react';
import Video from '../images/construction-site-view.mp4';

const PlayerComponent = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.muted = true; // Ensure the video is muted
            video.play().catch(error => {
                console.error('Error trying to play the video:', error);
            });
        }
    }, []);

    return (
        <div className="video-player">
            <video ref={videoRef} width="100%"  loop>
                <source src={Video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default PlayerComponent;

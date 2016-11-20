import React from 'react';

const VideoDetail = ({video}) => {

    if (!video) {
        return <div>Loading...</div>;
    }

    const videoID = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoID}`

    return (
        <div className='video-detail'>
            <iframe src={url}></iframe>
            <div className='details'>
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );

}

export default VideoDetail;
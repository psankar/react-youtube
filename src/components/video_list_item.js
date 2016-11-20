import React from 'react';

const VideoListItem = ({video}) => {
    return (
        <li>
            <div>
                <img src={video.snippet.thumbnails.default.url} />
                <div>{video.snippet.title}</div>
            </div>
        </li>
    );
}

export default VideoListItem;
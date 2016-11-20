import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    return (
        <li onClick={() => onVideoSelect(video)} className='list-group-item'>
            <div>
                <img src={video.snippet.thumbnails.default.url} />
                <div>{video.snippet.title}</div>
            </div>
        </li>
    );
}

export default VideoListItem;
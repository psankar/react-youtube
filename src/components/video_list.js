import React from 'react';

import VideoListItem from './video_list_item';

const VideoList = (props) => {

    const videoItems = props.videos.map(video => {
            return (
                <VideoListItem
                    key={video.etag}
                    video={video}
                    onVideoSelect={props.onVideoSelect}
                    className='list-group-item'
                />
            );
        });

    return (
        <ul >
            {videoItems}
        </ul>
    );
}

export default VideoList;
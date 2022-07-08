import React from 'react'
import './VideoItem.css'

const VideoItem = ({video, onVideoSelect}) => {
    const renderedVideo = video.snippet
    return (
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img 
                className="ui image"
                src={renderedVideo.thumbnails.medium.url} 
                alt={renderedVideo.description}
            />
            <div className="content">
                <div className="header">
                    {renderedVideo.title}
                </div>
            </div>
        </div>
    )
}

export default VideoItem
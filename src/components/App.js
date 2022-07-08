import React, { useState, useEffect } from 'react'
import useVideos from '../hooks/useVideos'
import SearchBar from './SearchBar'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'
import './App.css'

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [videos, search] = useVideos('corgis')

  useEffect(() => {
    setSelectedVideo(videos[0])
  }, [videos])

  
  return (
    <div className="app ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList className=""
              videos={videos} 
              onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
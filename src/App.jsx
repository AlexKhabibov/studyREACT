import VideoCard from './components/VideCard'
import { videoArr } from './components/dataVideos'
import './App.css'

function App() {
  return (
    <>
      <div className='video-container'>
        {videoArr.map((video) => (
          <VideoCard
            key={video.id}
            title={video.title}
            chName={video.chName}
            img={video.img} />
        ))}
      </div>
    </>
  )
}

export default App
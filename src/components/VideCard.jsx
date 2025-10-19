import { useState } from 'react';
import './Video.css'

function VideoCard({ title, chName, img }) {

    const [likesCount, setLikesCount] = useState(0);

    const increaseLikesbyOne = () => {
        setLikesCount(likesCount + 1);
    };

    return (
        <div className='video'>
            <img className='video-img' src={img} alt="vide image" />
            <p>{title}</p>
            <p>{chName}</p>
            <div className='video-footer'>
                <p>Likes: {likesCount}</p>
                <button onClick={increaseLikesbyOne}>Like</button>
            </div>
        </div>
    );
}

export default VideoCard;
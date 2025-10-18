import { useState } from "react";
import TrackItem from "./TrackItem";
import { tracksArr } from "./data";

function TracksListApp() {

    const [tracks] = useState(tracksArr);
    const [selectedTrackId, setSelectedTrackId] = useState(1);

    const handleNext = () => {
        setSelectedTrackId(prev => {
            if (prev >= tracks.length) {
                return 1;
            }
            return prev + 1;
        });
    };

    return (
        <>
            <h1>Music App</h1>
            <button onClick={handleNext}>Next selected Track</button>
            <hr />
            <div>
                <ul style={{ display: 'flex', flexDirection: 'column' }}>
                    {tracks.map(track => (
                        <TrackItem
                            key={track.id}
                            id={track.id}
                            title={track.title}
                            details={track.details}
                            track={track.id === selectedTrackId} />
                    ))}
                </ul>
            </div>
        </>
    );
}

export default TracksListApp;
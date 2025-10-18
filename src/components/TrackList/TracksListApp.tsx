import { useState } from "react";
import TrackItem from "./TrackItem";
import { tracksArr } from "./data";

function TracksListApp() {

    const [tracks] = useState(tracksArr);

    return (
        <div>
            <ul style={{ display: 'flex', flexDirection: 'column' }}>
                {tracks.map(track => (
                    <TrackItem
                        key={track.id}
                        id={track.id}
                        title={track.title}
                        details={track.details} />
                ))}
            </ul>
        </div>
    );
}

export default TracksListApp;
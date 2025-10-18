import { useState } from "react";
import TrackItem from "./TrackItem";
import { ITrack } from "./types";

function TracksListApp() {

    const [tracks] = useState<ITrack[]>([
        { id: 1, title: 'Bruno Mars - Uptown Funk' },
        { id: 2, title: 'Nirvana - Smells like teen spirit' },
        { id: 3, title: 'Korn - Blind' },
    ]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {tracks.map(track => (
                <TrackItem
                    key={track.id}
                    id={track.id}
                    title={track.title} />
            ))}
        </div>
    );
}

export default TracksListApp;
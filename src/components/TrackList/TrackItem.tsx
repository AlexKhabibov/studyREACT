import TrackDetail from "./TrackDetail";
import { ITrack } from "./types";

function TrackItem({ id, title, details, track }: ITrack) {
    return (
        <div>
            <li>
                {id} - <b>{title}</b>
            </li>
            <TrackDetail
                details={details}
                track={track} />
        </div>
    );
}

export default TrackItem;
import TrackDetail from "./TrackDetail";
import { ITrack } from "./types";

function TrackItem({ id, title, details }: ITrack) {
    return (
        <div>
            <li>
                {id} - <b>{title}</b>
            </li>
            <TrackDetail details={details} />
        </div>
    );
}

export default TrackItem;
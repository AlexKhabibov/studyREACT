import { ITrack } from "./types";

function TrackItem({ id, title }: ITrack) {
    return (
        <li>
            {id} - {title}
        </li>
    );
}

export default TrackItem;
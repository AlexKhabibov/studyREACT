import { ITrack } from "./types";

function TrackDetail({ details }: Partial<ITrack>) {

    if (!details) return <div>no track details</div>

    return (
        <div>
            {details}
        </div>
    );
}

export default TrackDetail;
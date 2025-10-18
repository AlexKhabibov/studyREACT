import { ITrack } from "./types";

function TrackDetail({ details, track }: Partial<ITrack>) {

    if (!track) return <div>no track details</div>

    return (
        <>
            <div>{details}</div>
            <div>{track ? "✅ Selected" : "❌ Not selected"}</div>
        </>
    );
}

export default TrackDetail;
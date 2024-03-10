import { Video } from "../Models/Video";

import { convertDate, convertNumber } from "../helpers/converters";

function VideoCard(props:Video){
    return( 
    <>
        <div className="space-y-2 cursor-pointer">
            <img
                src={props.thumbnail}
                alt="Video thumbnail"
                className="w-full rounded-md"
                width="320"
                height="180"
                style={{ aspectRatio: "320 / 180", objectFit: "cover" }} />
            <div className="flex">
                <div>
                <img src={props.channel.profilImg} alt="..." className="shadow rounded-full h-12 mr-3 align-middle border-none" />
                </div>
                <div>
                    <h3 className="text-sm font-semibold">{props.title}</h3>
                    <h3 className="text-sm text-gray-600">{props.channel.firstname} {props.channel.lastname}</h3>
                    <p className="text-xs text-gray-600">{convertNumber(props.nbrVues)} de vues • {convertDate(props.datePosting)}</p>
                </div>
            </div>
        </div>
    </>
    )
}

export default VideoCard;

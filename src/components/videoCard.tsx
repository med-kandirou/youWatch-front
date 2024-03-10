import { Video } from "../Models/Video";
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

function VideoCard(props:Video){
    TimeAgo.addLocale(en)
    const timeAgo = new TimeAgo('en-US')


    function convertNumber(num:number){
        return Intl.NumberFormat('en-US', {
            notation: "compact",
            maximumFractionDigits: 1
        }).format(num);
    }
    
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
                    <p className="text-xs text-gray-600">{convertNumber(props.nbrVues)} de vues • {timeAgo.format(new Date(props.datePosting))}</p>
                </div>
            </div>
        </div>
    </>
    )
}

export default VideoCard;

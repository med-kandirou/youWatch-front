import { Comment } from "../Models/Comment";
import { convertDate } from "../helpers/converters";

function Comments(c:Comment){
    return (
        <>
            <div className="flex">
                <div>
                    <img src={c.video_channel_id.channel.profilImg} alt="..." className="shadow rounded-full h-12 mr-3 align-middle border-none" />
                </div>
                <div>
                    <p className="text-sm">@{c.video_channel_id.channel.firstname} {c.video_channel_id.channel.lastname} il y a {convertDate(c.datePosting)}</p>
                    <p>{c.content}</p>
                </div>
            </div>
        </>
    )
}

export default Comments;
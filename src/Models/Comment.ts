import { Video_channel_Id } from "./Video_channel_Id";

export interface Comment{
    video_channel_id:Video_channel_Id;
    content:string;
    datePosting:Date;
}
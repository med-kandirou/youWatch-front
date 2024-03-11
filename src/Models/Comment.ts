import { Video_channel_Id } from "./Video_channel_Id";

export interface Comment{
    Video_channel_Id:Video_channel_Id;
    content:string;
    datePosting:Date;
}
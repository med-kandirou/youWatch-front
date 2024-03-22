import { createAsyncThunk } from "@reduxjs/toolkit"
import myApi from "../../helpers/myApi"
import { Video } from "../../Models/Video"
import { Comment } from "../../Models/Comment"
import { Reaction } from "../../Models/Reaction"


export const getCurrentVideo = createAsyncThunk<Video>(
    'video/getOne',
    async (id_video) => {
        const { data } = await myApi.get(`/video/${id_video}`)
        return data
    }
)

export const getCommentByVideo = createAsyncThunk<Comment[]>(
    'video/getCommentByVideo',
    async (id_video) => {
        const { data } = await myApi.get(`/comment/video/${id_video}`)
        return data
    }
)

export const getvideoByChannel = createAsyncThunk<Video[]>(
    'video/getvideoByChannel',
    async (id_video) => {
        const { data } = await myApi.get(`/video/channel/${id_video}`)
        return data
    }
)


export const saveComment = createAsyncThunk<Comment>(
    'video/savecomment',
    async (payload) => {
        const token = localStorage.getItem('token');
        const { data } = await myApi.post(`/comment`, {
            "videoId": payload.videoId,
            "channelId": payload.channelId,
            "content": payload.content
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return data;
    }
);



export const saveReact = createAsyncThunk<Reaction>(
    'video/react',
    async (payload) => {
        const token = localStorage.getItem('token');
        const { data } = await myApi.post(`/react`,{
            "video_channel_id":{
                "channel":{
                    "id":payload.channelId
                },
                "video":{
                    "id":payload.videoId
                }
            },
            "reaction":payload.reaction
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return data
    }
)

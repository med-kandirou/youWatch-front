import { createAsyncThunk } from "@reduxjs/toolkit"
import myApi from "../../helpers/myApi"
import { Video } from "../../Models/Video"
import { Comment } from "../../Models/Comment"


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



export const saveComment = createAsyncThunk<Comment, { videoId: string; channelId: string; content: string }>(
    'video/savecomment',
    async ({ videoId, channelId, content }) => {
        const token = localStorage.getItem('token');
        const { data } = await myApi.post(`/comment`,{
            'videoId':1,
            'channelId':1,
            'content':"content"
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return data
    }
)


export const savereact = createAsyncThunk<Comment, { videoId: string; channelId: string; react: boolean }>(
    'video/react',
    async ({ channelId,videoId, react }:{ videoId: string; channelId: string; react: boolean }) => {
        const token = localStorage.getItem('token');
        const { data } = await myApi.post(`/react`,{
            "video_channel_id":{
                "channel":{
                    "id":channelId
                },
                "video":{
                    "id":videoId
                }
            },
            "reaction":react
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return data
    }
)

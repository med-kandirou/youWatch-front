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


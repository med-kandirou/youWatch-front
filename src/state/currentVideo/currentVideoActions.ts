import { createAsyncThunk } from "@reduxjs/toolkit"
import myApi from "../../helpers/myApi"
import { Video } from "../../Models/Video"


export const getCurrentVideo = createAsyncThunk<Video>(
    'video/getOne',
    async (id_video) => {
        const { data } = await myApi.get(`/video/${id_video}`)
        return data
    }
)

// export const getCommentByVideo = createAsyncThunk<Video[]>(
//     'video/getCommentByVideo',
//     async (id_video) => {
//         const { data } = await myApi.get(`/video/${id_video}`)
//         return data
//     }
// )

// export const getvideoByChannel = createAsyncThunk<Video[]>(
//     'video/getCommentByVideo',
//     async (id_video) => {
//         const { data } = await myApi.get(`/video/${id_video}`)
//         return data
//     }
// )


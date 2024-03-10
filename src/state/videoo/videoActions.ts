import { createAsyncThunk } from "@reduxjs/toolkit"
import myApi from "../../helpers/myApi"
import { Video } from "../../Models/Video"


export const getAllvideos = createAsyncThunk<Video[]>(
    'video/all',
    async (page) => {
        const { data } = await myApi.get(`/video?page=${page}&size=6`)
        return data
    }
)


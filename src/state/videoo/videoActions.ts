import { createAsyncThunk } from "@reduxjs/toolkit"
import myApi from "../../axios/myApi"
import { Video } from "../../Models/Video"


export const getAllvideos = createAsyncThunk<Video[]>(
    'video/all',
    async (page) => {
        const { data } = await myApi.get(`/video?page=${page}&size=2`)
        return data
    }
)


import { createAsyncThunk } from "@reduxjs/toolkit"
import myApi from "../../helpers/myApi"
import { Video } from "../../Models/Video"
import { Vue } from "../../Models/Vue"


export const getAllvideos = createAsyncThunk<Video[]>(
    'video/all',
    async (page) => {
        const { data } = await myApi.get(`/video?page=${page}&size=6`)
        return data
    }
)


export const searchVideo = createAsyncThunk<Video[]>(
    'video/search',
    async (inputSearch) => {
        const { data } = await myApi.get(`/video/search/${inputSearch}`)
        return data
    }
)


export const findVueByChannelId = createAsyncThunk<Vue[]>(
    'video/findVueByChannelId',
    async (channelId) => {
        const token = localStorage.getItem('token');
        const { data } = await myApi.get(`/vue/channel/${channelId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return data;
    }
)


export const addVideo = createAsyncThunk<{video:Video},object>(
    'video/addVideo',
    async (video) => {
        const token = localStorage.getItem('token');
        const { data } = await myApi.post(`/video`, video, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return data;
    }
)


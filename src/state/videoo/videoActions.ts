import { createAsyncThunk } from "@reduxjs/toolkit"
import myApi from "../../helpers/myApi"
import { Video } from "../../Models/Video"
import { Vue } from "../../Models/Vue"


export const getAllvideos = createAsyncThunk<Video[]>(
    'video/all',
    async () => {
        const { data } = await myApi.get(`/video`)
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


export const findByCategorie = createAsyncThunk<Video[]>(
    'video/findByCategorie',
    async (videoId) => {
        const { data } = await myApi.get(`/video/byCatagory/${videoId}`)
        return data;
    }
)



export const trending = createAsyncThunk<Video[]>(
    'video/trending',
    async () => {
        const { data } = await myApi.get(`/video/trending`)
        return data;
    }
)



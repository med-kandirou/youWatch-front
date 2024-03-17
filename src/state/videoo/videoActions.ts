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
        const token = 'eyJhbGciOiJIUzI1NiJ9.eyJmaXJzdG5hbWUiOiJ1c2VyQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJG5MeWtzOWNmUUNPMXdnQ1FnQ0UvV2VCOXBuNU1TSlFPd2JDeS5CS0FZWi9JbnRQem4xVG55Iiwicm9sZSI6IlVTRVIiLCJsYXN0bmFtZSI6IkRvZSIsInN1YiI6InVzZXJAZ21haWwuY29tIiwiaWF0IjoxNzEwNDk2MDIyLCJleHAiOjE3MTA0OTc0NjJ9.ckihyIdrKXCtschmUkNU2jIPTEfVLoh4BixamlxgYJE';
        const { data } = await myApi.get(`/vue/channel/${channelId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return data;
    }
)


export const addVideo = createAsyncThunk<Video>(
    'video/addVideo',
    async (video) => {
        // const token = 'eyJhbGciOiJIUzI1NiJ9.eyJmaXJzdG5hbWUiOiJ1c2VyQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJG5MeWtzOWNmUUNPMXdnQ1FnQ0UvV2VCOXBuNU1TSlFPd2JDeS5CS0FZWi9JbnRQem4xVG55Iiwicm9sZSI6IlVTRVIiLCJsYXN0bmFtZSI6IkRvZSIsInN1YiI6InVzZXJAZ21haWwuY29tIiwiaWF0IjoxNzEwNDk2MDIyLCJleHAiOjE3MTA0OTc0NjJ9.ckihyIdrKXCtschmUkNU2jIPTEfVLoh4BixamlxgYJE';
        const { data } = await myApi.post(`/video`, video)
        return data;
    }
)


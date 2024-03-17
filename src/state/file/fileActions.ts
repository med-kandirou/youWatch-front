import { createAsyncThunk } from "@reduxjs/toolkit"
import uploadApi from "../../helpers/uploadApi"

export const uploadThumbnail = createAsyncThunk<{ url: string; done: boolean }, FormData>(
    'file/upload-image',
    async (file) => {
        try {
            const { data } = await uploadApi.post('/upload-image', file);
            return { done: true, url: data.url };
        } catch (error) {
            return { done: false, url: '' };
        }
    }
);


export const uploadVideo = createAsyncThunk<{url:string,done:boolean}, FormData>(
    'file/upload-video',
    async (file) => {
        try {
            const { data } = await uploadApi.post('/upload-video',file)
            return {done : true,url : data.url}
        } catch (error) {
            return {done : false} as {url :string, done : boolean}
        }
    }
)
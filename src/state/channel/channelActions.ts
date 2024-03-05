import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit"
import { Channel } from "../../Models/Channel"
import myApi from "../../axios/myApi"

export const channelLogin = createAsyncThunk<string>(
    'auth/login',
    async (channelCredentials) => {
        try {
           
            const { data } = await myApi.post('/auth/login',channelCredentials)
            return data
        } catch (error) {
            return isRejectedWithValue("Something went wrong. Please try again later.")
        }
    }
)

export const channelregister = createAsyncThunk<Channel>(
    'auth/register',
    async () => {
        try {
            const { data } = await myApi.post(`/auth/register`)
            return data
        } catch (error) {
            return isRejectedWithValue("Something went wrong. Please try again later.")
        }
    }
)
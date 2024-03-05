import { createAsyncThunk } from "@reduxjs/toolkit"
import { Channel } from "../../Models/Channel"
import myApi from "../../axios/myApi"

export const channelLogin = createAsyncThunk<string>(
    'auth/login',
    async (channelCredentials,{ rejectWithValue }) => {
        try {
            const { data } = await myApi.post('/auth/login',channelCredentials)
            return data
        } catch (error) {
            return rejectWithValue("Email or password incorrect")
        }
    }
)

export const channelregister = createAsyncThunk<string>(
    'auth/register',
    async (channelCredentials,{ rejectWithValue }) => {
        try {
            const { data } = await myApi.post(`/auth/register`,channelCredentials)
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
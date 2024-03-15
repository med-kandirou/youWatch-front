import { createAsyncThunk } from "@reduxjs/toolkit"
import { Channel } from "../../Models/Channel"
import myApi from "../../helpers/myApi"

export const channelLogin = createAsyncThunk<{token :string, channel :Channel, done : boolean}>(
    'auth/login',
    async (channelCredentials) => {
        try {
            const { data } = await myApi.post('/auth/login',channelCredentials)
            return {done : true,channel : data.channel, token : data.token}
        } catch (error) {
            return {done : false} as {token :string,channel :Channel, done : boolean}
        }
    }
)

export const channelregister = createAsyncThunk<Channel>(
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
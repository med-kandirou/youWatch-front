import { createAsyncThunk } from "@reduxjs/toolkit"
import { Channel } from "../../Models/Channel"
import myApi from "../../helpers/myApi"
import { Subscribe } from "../../Models/Subscribe"

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


export const getchannelById = createAsyncThunk<Channel>(
    'channel/getOne',
    async (channelCredentials) => {
        const { data } = await myApi.get(`/channel/${channelCredentials}`)
        return data
    }
)


export const getSubscriptionsById = createAsyncThunk<Subscribe[]>(
    'channel/getSubscriptionsById',
    async () => {
        const token=localStorage.getItem('token');
        const { data } = await myApi.get(`/subscribe/channel/${localStorage.getItem('channelId')}`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        return data
    }
)


export const stats = createAsyncThunk<number[]>(
    'channel/stats',
    async () => {
        const token=localStorage.getItem('token');
        const { data } = await myApi.get(`/channel/stats`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        return data
    }
)


export const subscribe = createAsyncThunk<Subscribe>(
    'channel/subscribe',
    async (payload) => {
        const token=localStorage.getItem('token');
        const { data } = await myApi.post(`/subscribe`,
        {
            "subscribeId":{
                "channelFollow":{
                    "id":payload.channelFollow
                },
                "channelFollowed":{
                    "id":payload.channelFollowed
                }
            }
        },
        {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        return data
    }
)



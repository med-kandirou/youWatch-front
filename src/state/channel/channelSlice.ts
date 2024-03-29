import { createSlice } from "@reduxjs/toolkit";
import { Channel } from "../../Models/Channel";
import { channelLogin, channelregister, getSubscriptionsById, getchannelById, stats } from "./channelActions";
import { Subscribe } from "../../Models/Subscribe";

interface channelState {
    channel:Channel | null,
    searchedChannel:Channel | null,
    token:string | null;
    isAuth:boolean,
    error:string,
    loading:boolean,
    subscribes:Subscribe[] | null,
    stats:number[] | null,
}

const initialState:channelState={
    channel:null,
    searchedChannel:null,
    token:localStorage.getItem('token') || null,
    isAuth:false,
    error:'',
    loading:false,
    subscribes:[],
    stats:[],
}

const channelSlice = createSlice({
    name: "channel",
    initialState,
    extraReducers: (builder) => {
        //login
        builder.addCase(channelLogin.fulfilled, (state, action) => {
            state.isAuth = true;
            state.token = action.payload.token;
            localStorage.setItem('token',action.payload.token)
            state.channel = action.payload.channel;
            localStorage.setItem('channelId',action.payload.channel.id.toString())
        });
        builder.addCase(channelLogin.rejected, (state,action) => {
            state.error = action.payload as string;
        });
        builder.addCase(channelLogin.pending, (state) => {
            state.isAuth = false;
        });
        //register
        builder.addCase(channelregister.fulfilled, (state, action) => {
            state.isAuth = true;
            state.channel = action.payload;
        });
        builder.addCase(channelregister.rejected, (state,action) => {
            state.error = action.payload as string;
        });
        builder.addCase(channelregister.pending, (state) => {
            state.isAuth = true;
        });
        //getChannelbyId
        builder.addCase(getchannelById.fulfilled, (state, action) => {
            state.searchedChannel=action.payload
        });
         //getSubscriptionsById
         builder.addCase(getSubscriptionsById.fulfilled, (state, action) => {
            state.subscribes=action.payload
        });
         //stats
        builder.addCase(stats.fulfilled, (state, action) => {
            state.stats=action.payload
        });
    },
    reducers:{}
});

export default channelSlice.reducer
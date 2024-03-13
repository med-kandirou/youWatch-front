import { createSlice } from "@reduxjs/toolkit";
import { Channel } from "../../Models/Channel";
import { channelLogin, channelregister } from "./channelActions";

interface channelState {
    channel:Channel | null
    token:string | null;
    isAuth:boolean,
    error:string,
    loading:boolean
}

const initialState:channelState={
    channel:null,
    token:localStorage.getItem('token') || null,
    isAuth:true,
    error:'',
    loading:false
}

const channelSlice = createSlice({
    name: "channel",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(channelLogin.fulfilled, (state, action) => {
            state.isAuth = true;
            state.token = action.payload;
        });
        builder.addCase(channelLogin.rejected, (state,action) => {
            state.error = action.payload as string;
        });
        builder.addCase(channelLogin.pending, (state) => {
            state.isAuth = true;
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
    },
    reducers:{}
});

export default channelSlice.reducer
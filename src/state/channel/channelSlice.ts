import { createSlice } from "@reduxjs/toolkit";
import { Channel } from "../../Models/Channel";
import { channelLogin } from "./channelActions";

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
    isAuth:false,
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
    },
    reducers:{}
});

export default channelSlice.reducer
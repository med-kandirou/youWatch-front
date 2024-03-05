import { createSlice } from "@reduxjs/toolkit";
import { Channel } from "../../Models/Channel";
import { channelLogin } from "./channelActions";

interface channelState {
    channel:Channel | null
    token:string | null;
    isAuth:boolean
}

const initialState:channelState={
    channel:null,
    token:localStorage.getItem('token') || null,
    isAuth:false
}

const channelSlice = createSlice({
    name: "channel",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(channelLogin.fulfilled, (state, action) => {
            state.isAuth = true;
            state.token = action.payload;
            console.log("fulfilled");
        });
        builder.addCase(channelLogin.rejected, (state) => {
            state.isAuth = true;
            console.log("rejected");
        });
        builder.addCase(channelLogin.pending, (state) => {
            state.isAuth = true;
            console.log("rejected");
        });
    },
    reducers:{}
});

export default channelSlice.reducer
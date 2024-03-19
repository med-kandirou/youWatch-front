import { createSlice } from "@reduxjs/toolkit";
import { Video } from "../../Models/Video";
import { findVueByChannelId, getAllvideos, searchVideo, trending } from "./videoActions";
import { Vue } from "../../Models/Vue";


interface videoState {
    videos:Video[] | null,
    vues:Vue[] | null
}

const initialState:videoState={
    videos:[],
    vues:[]
}

const videoSlice = createSlice({
    name: "video",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getAllvideos.fulfilled, (state, action) => {
            state.videos = action.payload;
        });
        //search
        builder.addCase(searchVideo.fulfilled, (state, action) => {
            state.videos = action.payload;
        });
        //findVueByChannelId
        builder.addCase(findVueByChannelId.fulfilled, (state, action) => {
            state.vues = action.payload;
        });
        //trending
        builder.addCase(trending.fulfilled, (state, action) => {
            console.log(state.videos)
            state.videos = action.payload;
        });
    },
    reducers:{}
});

export default videoSlice.reducer
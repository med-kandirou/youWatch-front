import { createSlice } from "@reduxjs/toolkit";
import { Video } from "../../Models/Video";
import { Comment } from "../../Models/Comment";
import { getCurrentVideo, getvideoByChannel } from "./currentVideoActions";



interface currentVideoState {
    currentVideo:Video | null,
    videos:Video[] | null,
    comments:Comment[],
}

const initialState:currentVideoState={
    currentVideo:null,
    videos:[],
    comments:[],
}

const currentvideoSlice = createSlice({
    name: "currentvideo",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getCurrentVideo.fulfilled, (state, action) => {
            state.currentVideo = action.payload;
            localStorage.setItem('id_channel',state.currentVideo.channel.id.toString())
        });
        //getvideoByChannel
        builder.addCase(getvideoByChannel.fulfilled, (state, action) => {
            state.videos = action.payload;
        });


    },
    reducers:{}
});

export default currentvideoSlice.reducer
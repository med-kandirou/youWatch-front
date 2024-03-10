import { createSlice } from "@reduxjs/toolkit";
import { Video } from "../../Models/Video";
import { Comment } from "../../Models/Comment";
import { getCurrentVideo } from "./currentVideoActions";



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
        });
    },
    reducers:{}
});

export default currentvideoSlice.reducer
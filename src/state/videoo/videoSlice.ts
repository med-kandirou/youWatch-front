import { createSlice } from "@reduxjs/toolkit";
import { Video } from "../../Models/Video";
import { getAllvideos } from "./videoActions";


interface videoState {
    videos:Video[] | null
}

const initialState:videoState={
    videos:[]
}

const videoSlice = createSlice({
    name: "video",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getAllvideos.fulfilled, (state, action) => {
            state.videos = action.payload;
        });
    },
    reducers:{}
});

export default videoSlice.reducer
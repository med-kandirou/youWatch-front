import { createSlice } from "@reduxjs/toolkit";
import { uploadThumbnail, uploadVideo } from "./fileActions";

interface fileState {
    file:string | null,
}

const initialState:fileState={
    file:null,
}

const channelSlice = createSlice({
    name: "file",
    initialState,
    extraReducers: (builder) => {
        //upload Image
        builder.addCase(uploadThumbnail.fulfilled, (state, action) => {
            state.file = action.payload.url;
        });
        //upload video
        builder.addCase(uploadVideo.fulfilled, (state, action) => {
            state.file = action.payload.url;
        });
    },
    reducers:{}
});

export default channelSlice.reducer
import { createSlice } from "@reduxjs/toolkit";
import { uploadImage } from "./fileActions";

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
        builder.addCase(uploadImage.fulfilled, (state, action) => {
            state.file = action.payload.url;
        });
        //upload video
    },
    reducers:{}
});

export default channelSlice.reducer
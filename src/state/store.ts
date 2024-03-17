import { configureStore } from "@reduxjs/toolkit";
import channelReducer from "./channel/channelSlice";
import categoriesReducer from "./categories/categorySlice";
import videoReducer from "./videoo/videoSlice";
import currentVideo from "./currentVideo/currentVideo";
import file from "./file/fileSlice";
export const store= configureStore({
    reducer:{
        channel:channelReducer,
        categories:categoriesReducer,
        videos:videoReducer,
        currentVideo:currentVideo,
        file:file
    }
})

export type RootState= ReturnType<typeof store.getState>
export type appDispatch= typeof store.dispatch
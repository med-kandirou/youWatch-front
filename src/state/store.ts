import { configureStore } from "@reduxjs/toolkit";
import channelReducer from "./channel/channelSlice";
import categoriesReducer from "./categories/categorySlice";
import videoReducer from "./videoo/videoSlice";

export const store= configureStore({
    reducer:{
        channel:channelReducer,
        categories:categoriesReducer,
        videos:videoReducer
    }
})

export type RootState= ReturnType<typeof store.getState>
export type appDispatch= typeof store.dispatch
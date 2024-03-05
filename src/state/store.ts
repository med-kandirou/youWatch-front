import { configureStore } from "@reduxjs/toolkit";
import channelReducer from "./channel/channelSlice";
export const store= configureStore({
    reducer:{
        channel:channelReducer
    }
})

export type RootState= ReturnType<typeof store.getState>
export type appDispatch= typeof store.dispatch
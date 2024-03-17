import { createAsyncThunk } from "@reduxjs/toolkit"
import uploadApi from "../../helpers/uploadApi"

export const uploadImage = createAsyncThunk<{url:string,done:boolean}>(
    'file/upload',
    async (file) => {
        try {
            const { data } = await uploadApi.post('/upload-image',file)
            return {done : true,url : data.url}
        } catch (error) {
            return {done : false} as {url :string, done : boolean}
        }
    }
)
import { createAsyncThunk } from "@reduxjs/toolkit"
import { Category } from "../../Models/Categorie"
import myApi from "../../helpers/myApi"


export const getAllCategories = createAsyncThunk<Category[]>(
    'category/all',
    async () => {
        const { data } = await myApi.get(`/category`)
        return data
    }
)


import { createSlice } from "@reduxjs/toolkit";
import {  Category } from "../../Models/Categorie";
import { getAllCategories } from "./categorieActions";

interface categoryState {
    categories:Category[] | null
}

const initialState:categoryState={
    categories:[]
}

const categorySlice = createSlice({
    name: "category",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getAllCategories.fulfilled, (state, action) => {
            state.categories = action.payload;
        });
    },
    reducers:{}
});

export default categorySlice.reducer
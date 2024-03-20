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


export const deleteCategory = createAsyncThunk<Category>(
    'category/delete',
    async (id) => {
        const token=localStorage.getItem('token');
        const { data } = await myApi.delete(`/category/${id}`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        return data
    }
)

export const addCategory = createAsyncThunk<Category>(
    'category/addCategory',
    async (category) => {
        const token = localStorage.getItem('token');
        const { data } = await myApi.post(`/category`, 
        {
            "name":category    
        }, 
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return data;
    }
);
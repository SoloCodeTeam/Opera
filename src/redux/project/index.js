import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"
import { API_URL } from "../../utils";

export const GetProject = createAsyncThunk("project/get" , async () => {
    return await axios.get(`${API_URL}/project`).then(res => res.data)
})
export const GetProjectId = createAsyncThunk("projecter/get" , async (id) => {
    return await axios.get(`${API_URL}/project/${id}`).then(res => res.data)
})
export const DeleteProject = createAsyncThunk("project/delete" , async ({id, config}) => {
    return await axios.delete(`${API_URL}/project/${id}`, config).then(res => res.data)
})
export const PostProject = createAsyncThunk("project/post" , async ({body, config}) => {
    return await axios.post(`${API_URL}/project`,body, config).then(res => res.data)
})
export const PutProject = createAsyncThunk("project/put" , async ({body, id, config}) => {
    return await axios.put(`${API_URL}/project/${id}`,body, config).then(res => res.data)
})
const ProjectSlice = createSlice({
    name: "project",
    initialState:{
        getProject :{
            Loading: false,
            Error: false,
            Success: false,
            Data: []
        },
        getProjectId :{
            Loading: false,
            Error: false,
            Success: false,
            Data: []
        },
        deleteProject :{
            Loading: false,
            Error: false,
            Success: false,
            Data: []
        },
        postProject :{
            Loading: false,
            Error: false,
            Success: false,
            Data: []
        },
        putProject :{
            Loading: false,
            Error: false,
            Success: false,
            Data: []
        }
    },
    extraReducers:{
        [GetProject.pending] : (state, action) => {
            state.getProject.Loading = true;
            state.getProject.Error = false;
            state.getProject.Success = false;
        },
        [GetProject.fulfilled] : (state, action) => {
            state.getProject.Loading = false;
            state.getProject.Error = false;
            state.getProject.Success = true;
            state.getProject.Data = action.payload
        },
        [GetProject.rejected] : (state, action) => {
            state.getProject.Loading = false;
            state.getProject.Error = true;
            state.getProject.Success = false;
            state.getProject.Data = action.payload
        },
        [GetProjectId.pending] : (state, action) => {
            state.getProjectId.Loading = true;
            state.getProjectId.Error = false;
            state.getProjectId.Success = false;
        },
        [GetProjectId.fulfilled] : (state, action) => {
            state.getProjectId.Loading = false;
            state.getProjectId.Error = false;
            state.getProjectId.Success = true;
            state.getProjectId.Data = action.payload
        },
        [GetProjectId.rejected] : (state, action) => {
            state.getProjectId.Loading = false;
            state.getProjectId.Error = true;
            state.getProjectId.Success = false;
            state.getProjectId.Data = action.payload
        },
        [DeleteProject.pending] : (state, action) => {
            state.deleteProject.Loading = true;
            state.deleteProject.Error = false;
            state.deleteProject.Success = false;
        },
        [DeleteProject.fulfilled] : (state, action) => {
            state.deleteProject.Loading = false;
            state.deleteProject.Error = false;
            state.deleteProject.Success = true;
            state.deleteProject.Data = action.payload
        },
        [DeleteProject.rejected] : (state, action) => {
            state.deleteProject.Loading = false;
            state.deleteProject.Error = true;
            state.deleteProject.Success = false;
            state.deleteProject.Data = action.payload
        },
        [PostProject.pending] : (state, action) => {
            state.postProject.Loading = true;
            state.postProject.Error = false;
            state.postProject.Success = false;
        },
        [PostProject.fulfilled] : (state, action) => {
            state.postProject.Loading = false;
            state.postProject.Error = false;
            state.postProject.Success = true;
            state.postProject.Data = action.payload
        },
        [PostProject.rejected] : (state, action) => {
            state.postProject.Loading = false;
            state.postProject.Error = true;
            state.postProject.Success = false;
            state.postProject.Data = action.payload
        },
        [PutProject.pending] : (state, action) => {
            state.putProject.Loading = true;
            state.putProject.Error = false;
            state.putProject.Success = false;
        },
        [PutProject.fulfilled] : (state, action) => {
            state.putProject.Loading = false;
            state.putProject.Error = false;
            state.putProject.Success = true;
            state.putProject.Data = action.payload
        },
        [PutProject.rejected] : (state, action) => {
            state.putProject.Loading = false;
            state.putProject.Error = true;
            state.putProject.Success = false;
            state.putProject.Data = action.payload
        }
    }
})
export const {} = ProjectSlice.actions;
export default ProjectSlice.reducer
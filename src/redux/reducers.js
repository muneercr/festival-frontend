 
import { createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from './axios';  

// Define an asynchronous action using createAsyncThunk
export const fetchDatas = createAsyncThunk('data/fetchData', async () => {
  const response = await axios.get('http://localhost:5000/api/bandset');
  return response;
});
export const postDatas = createAsyncThunk('data/postDatas', async (data) => {
  console.log("post",data);
  const response = await axios.post('http://localhost:5000/api/login',data);
  return response;
});

 

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: null,
    loading: false,
    error: null,
    token:null,
  },
  reducers: {
    fetchDataRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.token = action.payload.token
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataRequest, fetchDataSuccess, fetchDataFailure } = dataSlice.actions;
 
export default dataSlice.reducer;

  
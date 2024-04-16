 
import { createSlice,createAsyncThunk,} from '@reduxjs/toolkit';
import axios from '../axios';  

// Define an asynchronous action using createAsyncThunk
// Admin Login
export const adminLogin = createAsyncThunk('data/adminLogin', async (data) => {
  console.log("adminLogin",data);
  const response = await axios.post('http://localhost:5000/api/adminLogin',data);
  return response;
});

//get bandset
export const getBandset = createAsyncThunk('data/getBandset', async () => {
  const response = await axios.get('http://localhost:5000/api/bandset');
  return response;
});
//post bandset
export const addBandset = createAsyncThunk('data/addBandset', async (data) => {
  console.log("post",data);
  const response = await axios.post('http://localhost:5000/api/bandset',data);
  return response;
});
//delete bandset
export const deleteBandset =createAsyncThunk('data/deleteBandset', async (id) => {
  const response = await axios.delete(`http://localhost:5000/api/bandset/${id}`) 
})

//get by Id
export const getBandsetById = createAsyncThunk('data/getBandsetById', async (id) => {
  const response = await axios.get(`http://localhost:5000/api/bandset/${id}`);
  return response;
});

//get by Id
export const editBandset = createAsyncThunk('data/editBandset', async (data:any,) => {
  console.log("reduex",data); 
  const id =data?._id 
  
  
  const response = await axios.put(`http://localhost:5000/api/bandset/${id}`,data);
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
    fetchDataSuccess: (state, action ) => {
      state.loading = false;
      state.data = action.payload;
      state.token = action.payload.token
    },
    fetchDataFailure: (state, action ) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataRequest, fetchDataSuccess, fetchDataFailure } = dataSlice.actions;
 
export default dataSlice.reducer;

  
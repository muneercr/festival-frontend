import { createSlice,createAsyncThunk,} from '@reduxjs/toolkit';
import axios from '../axios';  

const url = process.env.BASE_URL
 
// Admin Login
export const adminLogin = createAsyncThunk('data/adminLogin', async (data) => {
  console.log("adminLogin",data);
  const response = await axios.post(`${url}/api/adminLogin`,data);
  return response;
});

//user login
export const userLogin = createAsyncThunk('data/login', async (data) => {
  console.log("userLogin",data);
  const response = await axios.post(`${url}/api/login`,data);
  return response;
});

//user register
export const userRegister = createAsyncThunk('data/register', async (data) => {
  console.log("userLogin",data);
  const response = await axios.post(`${url}/api/register`,data);
  return response;
});

//user forget password
export const userForgetPassword = createAsyncThunk('data/userForget', async (data) => {
  console.log("userLogin",data);
  const response = await axios.post(`${url}/api/userForget`,data);
  return response;
});

//get bandset
export const getBandsetList = createAsyncThunk('data/getBandset', async () => {
  const response = await axios.get(`${url}/api/bandset`);
  return response;
});

//post bandset
export const addBandset = createAsyncThunk('data/addBandset', async (data:any) => {
  const formData = new FormData();
  formData.append('bandsetName', data.bandsetName);
  formData.append('bandsetPrice', data.bandsetPrice);
  formData.append('bntBookingPeriod', data.bntBookingPeriod);
  formData.append('biddingDuedays', data.biddingDuedays);
  formData.append('bandsetImages', data.bandsetImages);
  formData.append('category', data.category);
 
  console.log("post",formData);
  const response = await axios.post(`${url}/api/bandset`,formData);
  return response;
});

//delete bandset
export const deleteBandset =createAsyncThunk('data/deleteBandset', async (id) => {
  const response = await axios.delete(`${url}/api/bandset/${id}`) 
})

//get by Id
export const getBandsetById = createAsyncThunk('data/getBandsetById', async (id) => {
  const response = await axios.get(`${url}/api/bandset/${id}`);
  return response;
});

//get by Id
export const editBandset = createAsyncThunk('data/editBandset', async (data:any,) => {
  const id =data?._id  

  const formData = new FormData();
  formData.append('bandsetName', data.bandsetName);
  formData.append('bandsetPrice', data.bandsetPrice);
  formData.append('bntBookingPeriod', data.bntBookingPeriod);
  formData.append('biddingDuedays', data.biddingDuedays);
  formData.append('bandsetImages', data.bandsetImages);
  formData.append('category', data.category);
  const response = await axios.put(`${url}/api/bandset/${id}`,formData);
  return response;
});

//post program

export const bidPrograms = createAsyncThunk('data/addBid', async (data:any) => {
  console.log("data",data);

  
 const id = data?.id 
 const values =data?.values
 
 const response = await axios.post( `${url}/api/programBooking/bidding/${id}`,values);
 return response;
});

export const bookPrograms = createAsyncThunk('data/addBandset', async (data:any) => {
   console.log("data",data);
   
  const id = data?.id
  const values =data?.values
  
  const response = await axios.post( `${url}/api/programBooking/${id}`,values);
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
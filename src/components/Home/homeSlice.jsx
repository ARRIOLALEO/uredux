import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
const options = {
  method: 'GET',
  url: 'https://investing-cryptocurrency-markets.p.rapidapi.com/coins/list-pairs',
  params: {time_utc_offset: '28800', lang_ID: '1'},
  headers: {
    'X-RapidAPI-Host': 'investing-cryptocurrency-markets.p.rapidapi.com',
    'X-RapidAPI-Key': 'here your api key'
  }
};
export const callAPI = createAsyncThunk('api/news',async(obj,{state,error})=>{
  const req = await axios.request(options)
  return req.data
}
)
const newsSlice = createSlice({
  name: 'news',
  initialState: [],
  reducers: {},
  extraReducers: {
    [callAPI.fulfilled]: (state, action) => {
      return action.payload;
    },
    [callAPI.rejected]: (state, action) => {
      return []
    }
  }
})
export const actions = newsSlice.actions
export default newsSlice


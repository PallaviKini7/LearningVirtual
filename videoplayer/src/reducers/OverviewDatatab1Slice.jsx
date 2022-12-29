import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
  message: '',
  data: [],
  headers: [],
  isSuccess: false,
  isRejected: false,
  loading: false,
};
/*${arg} */
export const OverViewTab1 = createAsyncThunk(
  'OverViewTab1/overViewtabdata',
  async (arg, { rejectWithValue }) => {
    try {
      const fetchedData = await axios.request({
        method: 'get',
        url: `http://virtuallearn-env.eba-6xmym3vf.ap-south-1.elasticbeanstalk.com/user/courseOverView?courseId=32`,
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('Token')}`,
        },
      });

      return fetchedData;
    } catch (err) {
      let error = err;
      return rejectWithValue(
        error && error.response && error.response.data && error.response.data
      );
    }
  }
);

export const OverViewTab1Slice = createSlice({
  name: 'overViewtabdata',
  initialState,
  reducers: {
    OverViewTab1isSuccess: (state) => {
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(OverViewTab1.pending, (state, action) => {
      // Add user to the state array
      state.loading = true;
    });
    builder.addCase(OverViewTab1.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.headers = action;
      state.isSuccess = true;
    });
    builder.addCase(OverViewTab1.rejected, (state, action) => {
      state.message = action.payload;
      state.loading = false;
      state.isRejected = true;
    });
  },
});

export const { OverViewTab1isSuccess } = OverViewTab1Slice.actions;

export default OverViewTab1Slice;

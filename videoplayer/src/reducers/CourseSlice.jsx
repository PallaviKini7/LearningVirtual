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

export const OngoingCourse = createAsyncThunk(
  'OngoingCourse/ongoingData',
  async (arg, { rejectWithValue }) => {
    try {
      const fetchedData = await axios.request({
        method: 'get',
        url: `http://virtuallearn-env.eba-6xmym3vf.ap-south-1.elasticbeanstalk.com/user/ongoingCourses`,
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

export const OngoingCourseSlice = createSlice({
  name: 'ongoingData',
  initialState,
  reducers: {
    OngoingCourseisSuccess: (state) => {
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(OngoingCourse.pending, (state, action) => {
      // Add user to the state array
      state.loading = true;
    });
    builder.addCase(OngoingCourse.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.headers = action;
      state.isSuccess = true;
    });
    builder.addCase(OngoingCourse.rejected, (state, action) => {
      state.message = action.payload;
      state.loading = false;
      state.isRejected = true;
    });
  },
});

export const { OngoingCourseisSuccess } = OngoingCourseSlice.actions;

export default OngoingCourseSlice;

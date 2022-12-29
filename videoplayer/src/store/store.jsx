import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import OngoingCourseSlice from "../reducers/CourseSlice";
import OverViewTab1Slice from "../reducers/OverviewDatatab1Slice";

const reducers = combineReducers({
  OngoingCourse:OngoingCourseSlice.reducer,
  OverViewTab1:OverViewTab1Slice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});



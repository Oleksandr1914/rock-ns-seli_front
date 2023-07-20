import { configureStore } from "@reduxjs/toolkit";
import galleryReducer from "./Gallery/gallerySlice";

const store = configureStore({
  reducer: {
    rock: galleryReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

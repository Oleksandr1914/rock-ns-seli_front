import { createSlice } from "@reduxjs/toolkit";
import { fetchEighteenList } from "./galleryOperation";

type ItemImage = {
  asset_id: string;
  bytes: number;
  created_at: string;
  folder: string;
  format: string;
  height: number;
  public_id: string;
  resource_type: string;
  secure_url: string;
  type: string;
  url: string;
  version: number;
  width: number;
};

type GalleryState = {
  EighteenList: ItemImage[];
  NineteenthList: [];
  TwentyFirstList: [];
  loading: boolean;
  error: string | null;
};

const initialState: GalleryState = {
  EighteenList: [],
  NineteenthList: [],
  TwentyFirstList: [],
  loading: false,
  error: null,
};

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEighteenList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEighteenList.fulfilled, (state, action) => {
        state.EighteenList = action.payload;
        state.loading = false;
      });
  },
});

export default gallerySlice.reducer;

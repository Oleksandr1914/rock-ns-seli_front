import { createAsyncThunk, AnyAction } from "@reduxjs/toolkit";

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

export const fetchEighteenList = createAsyncThunk<
  ItemImage[],
  undefined,
  { rejectValue: string }
>("gallery/fetchEighteenList", async function (_, { rejectWithValue }) {
  const response = await fetch(
    "https://rock-na-seli-back.onrender.com/rock/2018"
  );
  if (!response.ok) {
    return rejectWithValue("Server Error!");
  }

  const data = await response.json();

  return Object.values(data);
});

export function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}

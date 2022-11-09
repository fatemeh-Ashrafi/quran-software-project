import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  font:12,
};
export const FontSizeSlice = createSlice({
  name: "fontSize",
  initialState:{value:initialState},
  reducers: {
    addFont: (state) => {
      state.value.font +=2;
    },
    removeFont:(state)=>{
        state.value.font -=2;
    },
  },
});
export const { addFont , removeFont } = FontSizeSlice.actions;
export default FontSizeSlice.reducer;

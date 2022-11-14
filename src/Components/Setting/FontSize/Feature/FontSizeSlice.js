import { createSlice } from "@reduxjs/toolkit";
// const initialState = {
//   font:18,
// };
export const FontSizeSlice = createSlice({
  name: "fontSize",
  initialState:{value:18},
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

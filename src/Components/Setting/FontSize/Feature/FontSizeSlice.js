import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  font:24,
  fonttarjom:24,
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
    addtranslate: (state) => {
      state.value.fonttarjom +=2;
    },
    removetranslate:(state)=>{
        state.value.fonttarjom -=2;
    },
  },
});
export const { addFont , removeFont,addtranslate,removetranslate } = FontSizeSlice.actions;
export default FontSizeSlice.reducer;

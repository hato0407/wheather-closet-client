import { createSlice } from '@reduxjs/toolkit';

export const ClothesSlice = createSlice({
  name: 'clothes',
  initialState: { descTem: '', icon: '', descClothes: '' },
  reducers: {
    SETDESCTEM: (state, action) => {
      state.descTem = action.payload;
    },
    SETICON: (state, action) => {
      state.icon = action.payload;
    },
    SETDESCCLOTHE: (state, action) => {
      state.descClothes = action.payload;
    },
  },
});

export default ClothesSlice.reducer;
export const { SETDESCCLOTHE } = ClothesSlice.actions;
export const { SETDESCTEM } = ClothesSlice.actions;
export const { SETICON } = ClothesSlice.actions;

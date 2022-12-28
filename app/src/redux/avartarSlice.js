import { createSlice } from '@reduxjs/toolkit';
import defalutAvartar from '../../assets/images/default-avartar.png';

const avartarSlice = createSlice({
  name: 'avartar',
  initialState: { avartar: defalutAvartar },
  reducers: {
    upload(state, action) {
      return action.payload;
    },
  },
});

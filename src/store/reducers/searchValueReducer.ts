import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SearchValueState {
  value: string | null;
}

const initialState: SearchValueState = {
  value: "",
};

export const SearchSlise = createSlice({
  name: "searchPokemons",
  initialState: initialState,
  reducers: {
    putSearchAction(state, action: PayloadAction<string | null>) {
      state.value = action.payload;
    }
  },
});

export default SearchSlise.reducer;

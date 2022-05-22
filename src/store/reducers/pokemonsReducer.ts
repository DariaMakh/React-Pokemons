import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPokemons } from "../actions/pokemonsActions";

export interface PokemonsState {
  pokemons: any[];
  loading: boolean;
  error: null | string;
}

const initialState: PokemonsState = {
  pokemons: [],
  loading: false,
  error: null,
};

export const PokemonsSlise = createSlice({
  name: "pokemons",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [fetchPokemons.fulfilled.type]: (state, action: PayloadAction<any[]>) => {
      state.loading = false;
      state.error = null;
      state.pokemons = action.payload;
    },
    [fetchPokemons.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchPokemons.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default PokemonsSlise.reducer;
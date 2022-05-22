import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPokemons = createAsyncThunk(
  "pokemons/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
      );
      const pokemonsArray = data.results;
      return pokemonsArray;
    } catch (error) {
      return thunkAPI.rejectWithValue("Не удалось загрузить покемонов, попробуйте обновить страницу")
    }
  }
);

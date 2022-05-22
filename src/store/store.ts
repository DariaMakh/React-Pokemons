import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import pokemonsReducer from "./reducers/pokemonsReducer";
import searchValueReducer from "./reducers/searchValueReducer";

export const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  search: searchValueReducer,
});

export const createStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = AppStore["dispatch"];

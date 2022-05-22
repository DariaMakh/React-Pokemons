import { Autocomplete, TextField } from "@mui/material";
import React, { FC, ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { SearchSlise } from "../store/reducers/searchValueReducer";

export const SearchSection: FC = (): ReactElement => {
  const { pokemons } = useAppSelector((state) => state.pokemons);
  const { putSearchAction } = SearchSlise.actions;
  const searchValue = useAppSelector((state) => state.search.value);

  const dispatch = useAppDispatch();

  return (
    <>
      <Autocomplete
        options={pokemons.map((pokemon) => pokemon.name)}
        renderInput={(params) => (
          <TextField {...params} label="Выберите покемона" />
        )}
        value={searchValue || null}
        onChange={(event: any, newValue: string) =>
          dispatch(putSearchAction(newValue))
        }
      />
    </>
  );
};

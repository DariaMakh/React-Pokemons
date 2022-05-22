import { Grid, Typography } from "@mui/material";
import React, { FC, ReactElement, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchPokemons } from "../store/actions/pokemonsActions";

const PokemonsList: FC = (): ReactElement => {
  const { pokemons, loading, error } = useAppSelector(
    (state) => state.pokemons
  );
  const dispatch = useAppDispatch();

  const searchValue = useAppSelector((state) => state.search.value);

  useEffect(() => {
    function getPokemonsList() {
      try {
        dispatch(fetchPokemons());
      } catch (error) {
        alert("Ошибка загрузки списка покемонов, попробуйте обновить страницу");
      }
    }
    getPokemonsList();
  }, []);

  if (loading) {
    return (
      <Typography variant="h5" gutterBottom component="div">
        Идет загрузка списка покемонов...
      </Typography>
    );
  }

  if (error !== null) {
    return (
      <Typography variant="h5" gutterBottom component="div">
        {error}
      </Typography>
    );
  }

  const filteredItems = pokemons?.filter((item) =>
    item.name.toLowerCase().includes(searchValue)
  );

  return (
    <Grid container spacing={2} style={{ marginTop: 20 }}>
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom component="div">
          Список найденных покемонов:
        </Typography>
      </Grid>
      {(searchValue !== "" && searchValue !== null) ? (
        <Grid item xs={12}>
          {filteredItems?.map((item, index) => (
            <Typography variant="body1" gutterBottom key={index}>
              {item.name}
            </Typography>
          ))}
        </Grid>
      ) : (
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom>
            Покемоны не найдены..
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default PokemonsList;

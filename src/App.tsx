import React from "react";
import { Typography } from "@mui/material";
import PokemonsList from "./components/PokemonsList";
import { SearchSection } from "./components/SearchSection";
import { Box, Container } from "@mui/system";

function App() {
  return (
    <Container>
      <Box className="main-wrap">
        <Typography variant="h3" gutterBottom component="h1">
          Покемоны
        </Typography>

        <SearchSection />

        <PokemonsList />
      </Box>
    </Container>
  );
}

export default App;

import React from "react";

import RecipeReviewCard from "./components/ProductCard";
import { Container } from "@mui/material";

const Home = () => {
  // const products = [
  //   { name: 'Shimano Rod', price: 199.99, image: 'https://via.placeholder.com/300x200' },
  //   { name: 'Fishing Reel', price: 89.99, image: 'https://via.placeholder.com/300x200' },
  //   { name: 'Lure Set', price: 29.99, image: 'https://via.placeholder.com/300x200' },
  // ]

  return (
    <Container sx={{ py: 4 }}>
      <RecipeReviewCard />
    </Container>
  );
};

export default Home;

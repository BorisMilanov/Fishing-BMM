import React from 'react'
import { Grid, Container, Typography } from '@mui/material'
import ProductCard from './components/ProductCard'

const Home = () => {
  const products = [
    { name: 'Shimano Rod', price: 199.99, image: 'https://via.placeholder.com/300x200' },
    { name: 'Fishing Reel', price: 89.99, image: 'https://via.placeholder.com/300x200' },
    { name: 'Lure Set', price: 29.99, image: 'https://via.placeholder.com/300x200' },
  ]

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Featured Products
      </Typography>
      <Grid container spacing={3}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProductCard
              {...product}
              onAddToCart={() => console.log(`Add ${product.name} to cart`)}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Home

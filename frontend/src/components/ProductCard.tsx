import React from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from '@mui/material'

interface ProductProps {
  name: string
  image: string
  price: number
  onAddToCart: () => void
}

const ProductCard: React.FC<ProductProps> = ({ name, image, price, onAddToCart }) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia component="img" height="160" image={image} alt={name} />
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography color="text.secondary">${price.toFixed(2)}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" onClick={onAddToCart}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard

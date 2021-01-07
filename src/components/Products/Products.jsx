import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';


const products = [
    { id: 1, name: 'Shoes', description: 'Running Shoes', price: '$100', image:'https://media.gettyimages.com/photos/nike-air-max-90-hyperfuse-trainer-picture-id458968463?s=2048x2048' },
    { id: 2, name: 'Macbook', description: 'Apple Macbook', price: '$400', image: 'https://media.gettyimages.com/photos/apple-13inch-macbook-pro-laptop-computer-taken-on-november-21-2016-picture-id801805780?s=2048x2048' },
    { id: 3, name: 'Book', description: 'Book about books', price: '$25', image: 'https://media.gettyimages.com/photos/books-picture-id955854460?s=2048x2048'}
]

const Products = () => {
    return (
        <main>
          <Grid container spacing={4} justify="center" >
            {products.map((p) => {
                return(
                <Grid item key={p.id} xs={12} m={6} md={4} lg={3}>
                    <Product product={p} />
                </Grid>
            )})}
          </Grid>  
        </main>
    )
}

export default Products;

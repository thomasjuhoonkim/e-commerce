import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";
import useStyles from "./styles";

const products = [
  {
    id: 1,
    name: "HEMNES",
    description: "8-drawer dresser",
    price: "$399.00",
    image:
      "https://www.ikea.com/ext/ingkadam/m/4889301f07fc2b8f/original/PH160036.jpg?f=s",
  },
  {
    id: 2,
    name: "POANG",
    description: "Armchair",
    price: "$119.00",
    image:
      "https://www.ikea.com/ext/ingkadam/m/63eaf80b71cb5ac0/original/PH155353.jpg?f=s",
  },
];

const Products = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;

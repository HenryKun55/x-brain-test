/* eslint-disable react/prop-types */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import { Product } from '../../types/Product';
import * as ProductActions from '../../store/ducks/product/actions';
import * as CartActions from '../../store/ducks/cart/actions';
import { ApplicationState } from '../../store';

import CardProduct from '../../components/CardProduct';
import Form from '../../components/Form';

import './styles.css';

interface StateProps {
  data: Product[];
}

interface DispatchProps {
  addProductToCart(product: Product): void;
  getProducts(): void;
}

type Props = StateProps & DispatchProps

const Products: React.FC<Props> = ({ data, getProducts, addProductToCart }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const handleAddProduct = (product: Product) => {
    addProductToCart(product);
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" color="textSecondary">
            Produtos
          </Typography>
        </Grid>
        {data.map((product, key) => (
          <CardProduct product={product} keyProduct={key} key={product.description} add={handleAddProduct} />
        ))}
      </Grid>
      <Form />
    </Container>
  );
};

const mapStateToProps = ({ product }: ApplicationState) => ({
  data: product.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ ...ProductActions, ...CartActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);

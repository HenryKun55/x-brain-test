/* eslint-disable react/prop-types */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Grid, Container, Typography } from '@material-ui/core/';

import { useHistory } from 'react-router-dom';
import { Product } from '../../types/Product';
import * as ProductActions from '../../store/ducks/product/actions';
import * as AuthActions from '../../store/ducks/auth/actions';
import * as CartActions from '../../store/ducks/cart/actions';
import { ApplicationState } from '../../store';

import { User } from '../../types/User';

import CardProduct from '../../components/CardProduct';
import Form from '../../components/Form';

import './styles.css';

interface StateProps {
  data: Product[];
  cart: Product[];
}

interface DispatchProps {
  addProductToCart(product: Product): void;
  getProducts(): void;
  auth(user: User): void;
}

type Props = StateProps & DispatchProps

const Products: React.FC<Props> = ({
  data, getProducts, addProductToCart, auth, cart,
}) => {
  const history = useHistory();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const handleAddProduct = (product: Product) => {
    addProductToCart(product);
  };

  const handleAuth = (user: User) => {
    auth(user);
    history.push('/purchased', user);
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
      <Form auth={handleAuth} cart={cart} />
    </Container>
  );
};

const mapStateToProps = ({ product, cart }: ApplicationState) => ({
  data: product.data,
  cart: cart.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  ...ProductActions,
  ...CartActions,
  ...AuthActions,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);

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
import { ApplicationState } from '../../store';

import CardProduct from '../../components/CardProduct';

import './styles.css';

interface StateProps {
  data: Product[];
}

interface DispatchProps {
  getProducts(): void;
}

type Props = StateProps & DispatchProps

const Products: React.FC<Props> = ({ data, getProducts }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" color="textSecondary">
            Produtos
          </Typography>
        </Grid>
        {data.map((product, key) => (
          <CardProduct product={product} keyProduct={key} />
        ))}
      </Grid>
    </Container>
  );
};

const mapStateToProps = ({ product }: ApplicationState) => ({
  data: product.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(ProductActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);

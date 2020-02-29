/* eslint-disable react/prop-types */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import Container from '@material-ui/core/Container';
import { ApplicationState } from '../../store';
import * as ProductActions from '../../store/ducks/product/actions';
import { Product } from '../../types/Product';

interface StateProps {
  data: Product[];
}

interface DispatchProps {
  getProducts(): void;
  add(product: Product): void;
}

type Props = StateProps & DispatchProps

const Products: React.FC<Props> = ({ data, getProducts, add }) => {
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      {data.map((product) => (
        <div key={product.description}>
          {product.description}
          <img alt={product.description} src={require(`../../assets/${product.image}`)} />
        </div>
      ))}
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

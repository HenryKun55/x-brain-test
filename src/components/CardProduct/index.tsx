/* eslint-disable react/prop-types */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  Grid,
  Card,
  Avatar,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  OutlinedInput,
  Typography,
  ButtonBase,
} from '@material-ui/core';

import * as CartActions from '../../store/ducks/cart/actions';
import { Product } from '../../types/Product';

import { minus, plus } from '../../assets';

import { getCardItemWidth, useWindowSize, formatNumber } from '../../hooks';

import './styles.css';

interface CardProps {
  product: Product;
  keyProduct: number;
}

interface CardProps {
    product: Product;
    keyProduct: number;
}

interface DispatchProps {
  add(product: Product): void ;
}

type Props = CardProps & DispatchProps

const CardProduct: React.FC<Props> = ({ product, keyProduct, add }) => {
  const [raised, setRaised] = useState(20);
  const [amount, setAmount] = useState<Product[]>([]);

  const sendProduct = (_product: Product) => {
    const products: Product[] = [...amount];
    const p = products.findIndex((_p) => _p.description === _product.description);
    add(products[p]);
  };

  const divider = (price: number) => {
    const p = price / 12;
    return formatNumber(p);
  };

  const percentage = (price: number) => {
    const p = price * (90 / 100);
    return formatNumber(p);
  };

  const handleRemove = (_product: Product): boolean => {
    const products: Product[] = [...amount];
    const p = products.findIndex((_p) => _p.description === _product.description);
    products[p].amount = _product.amount <= 0 ? 0 : _product.amount - 1;
    setAmount(products);
    return true;
  };

  const handleAdd = (_product: Product): boolean => {
    const products: Product[] = [...amount];
    const p = products.findIndex((_p) => _p.description === _product.description);
    products[p].amount = _product.amount + 1;
    setAmount(products);
    return true;
  };

  useEffect(() => {
    setAmount((previousState) => [...previousState, product]);
  }, [product]);

  return (
    <Grid key={product.description} item xs={getCardItemWidth(useWindowSize())} onMouseEnter={() => setRaised(keyProduct)} onMouseLeave={() => setRaised(20)}>
      <Card raised={raised === keyProduct}>
        <CardMedia
          image={require(`../../assets/${product.image}`)}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body1" color="textSecondary" component="span">
            {product.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="span">
            {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}
          </Typography>
          <Typography variant="subtitle1" component="span">
            {`Em até 12x de ${divider(product.price)}`}
          </Typography>
          <Typography variant="subtitle2" component="span">
            {`${percentage(product.price)} à vista (10% de desconto)`}
          </Typography>
          <CardActions className="actionAmount" disableSpacing>
            <ButtonBase onClick={() => handleRemove(product)}>
              <Avatar alt="minus" src={minus} variant="rounded" />
            </ButtonBase>
            <OutlinedInput disabled label="QTD" value={amount.find((a) => a.description === product.description)?.amount} inputProps={{ style: { textAlign: 'center', marginLeft: 10, marginRight: 10 } }} />
            <ButtonBase onClick={() => handleAdd(product)}>
              <Avatar alt="minus" src={plus} variant="rounded" />
            </ButtonBase>
          </CardActions>
          <CardActions className="actionButton" disableSpacing>
            <Button onClick={() => sendProduct(product)} variant="contained" color="primary" disableElevation>
              ADICIONAR
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(CartActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(CardProduct);

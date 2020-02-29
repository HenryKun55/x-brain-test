/* eslint-disable react/prop-types */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import * as ProductActions from '../../store/ducks/product/actions';
import { Product } from '../../types/Product';

import { minus, plus } from '../../assets';

import './styles.css';

interface CardProps {
    product: Product;
    keyProduct: number;
}

interface DispatchProps {
    add?(product: Product): void;
  }

type Props = CardProps & DispatchProps

const CardProduct: React.FC<Props> = ({ product, keyProduct }) => {
  const [raised, setRaised] = useState(20);

  const divider = (price: number) => {
    const p = price / 12;
    return p.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' });
  };

  const percentage = (price: number) => {
    const p = price * (90 / 100);
    return p.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' });
  };

  return (
    <Grid key={product.description} item sm={3} onMouseEnter={() => setRaised(keyProduct)} onMouseLeave={() => setRaised(20)}>
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
          <Typography variant="caption" component="span">
            {`Em até 12x de ${divider(product.price)}`}
          </Typography>
          <Typography variant="caption" component="span">
            {`${percentage(product.price)} à vista (10% de desconto)`}
          </Typography>
          <CardActions className="actionAmount" disableSpacing>
            <Avatar alt="minus" src={minus} variant="rounded" />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <Avatar alt="minus" src={plus} variant="rounded" />
          </CardActions>
          <CardActions className="actionButton" disableSpacing>
            <Button variant="contained" color="primary" disableElevation>
              ADICIONAR
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
  );
};


const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(ProductActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(CardProduct);

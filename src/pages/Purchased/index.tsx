import React from 'react';

import {
  Container,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Button,
  Typography,
  Box,
} from '@material-ui/core/';

import { useLocation, useHistory } from 'react-router-dom';

import { purchase } from '../../assets';

import { formatNumber } from '../../hooks';

import './styles.css';

type Props = DataCue

const Purchased: React.FC<Props> = () => {
  const location = useLocation();
  const history = useHistory();

  const data: any = location.state;

  const handleNewPurchase = () => {
    history.push('/');
  };

  return (
    <Box height="100vh">
      <Container className="ContainerPurchased" maxWidth="xs">
        <Card className="CardPurshased">
          <CardContent className="CardContentPurchased">
            <Typography color="textPrimary" gutterBottom />
            <Typography variant="h5" component="h2">
              {data.name}
            </Typography>
            <Typography className="CardContainerText" color="textSecondary">
              Sua compra no valor de
              {' '}
              <strong style={{ color: '#22a8f7 ' }}>{formatNumber(data.price)}</strong>
              {' '}
              foi finalizada com sucesso
            </Typography>
            <CardMedia
              className="CardPurchaseImage"
              image={purchase}
              title="icon-purchased"
            />
          </CardContent>
          <CardActions className="CardPurchaseActions">
            <Button className="CardPurchaseButton" onClick={handleNewPurchase} variant="contained" color="primary" disableElevation>
              Iniciar Nova Compra
            </Button>
          </CardActions>
        </Card>
      </Container>
    </Box>

  );
};
export default Purchased;

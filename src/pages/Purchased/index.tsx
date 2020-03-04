/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

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

import { useHistory } from 'react-router-dom';

import { purchase } from '../../assets';

import { formatNumber } from '../../hooks';

import * as AuthActions from '../../store/ducks/auth/actions';
import { ApplicationState } from '../../store';

import { User } from '../../types/User';

import './styles.css';

interface PurchasedProps {
  user: User;
}

interface DispatchProps {
  removeAuth(): void;
}

type Props = PurchasedProps & DispatchProps

const Purchased: React.FC<Props> = ({ user, removeAuth }) => {
  const history = useHistory();
  const [finalUser, setFinalUser] = useState<User>();

  useEffect(() => {
    setFinalUser(user);
    removeAuth();
  }, []);

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
              {finalUser?.name}
            </Typography>
            <Typography className="CardContainerText" color="textSecondary">
              Sua compra no valor de
              {' '}
              <strong className="strongValue">{formatNumber(finalUser?.price)}</strong>
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

const mapStateToProps = ({ auth }: ApplicationState) => ({
  user: auth.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(AuthActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Purchased);

/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

import {
  reduxForm, Field, InjectedFormProps, WrappedFieldProps, FormErrors,
} from 'redux-form';

import { connect } from 'react-redux';
// import { bindActionCreators, Dispatch } from 'redux';

import {
  TextField, Grid, Typography, Button, Select, MenuItem, FormControl, InputLabel, FormHelperText, Box,
} from '@material-ui/core';

import { useHistory } from 'react-router-dom';

import {
  getFormItemWidth, useWindowSize, getFormItemSelectWidth, getButtonWidth, getCardItemWidth, formatNumber,
} from '../../hooks';


import { ApplicationState } from '../../store';

import { Product } from '../../types/Product';

import './styles.css';

interface FormData {
  name?: string;
  email?: string;
  genre?: string;
}

interface RenderInputProps {
  label: string;
  type: string;
  placeholder: string;
}

interface FormProps {
  cart: Product[];
}

type Input = WrappedFieldProps & RenderInputProps

const validate = (values: Readonly<FormData>): FormErrors<FormData> => {
  const errors: FormErrors<FormData> = {};

  const error = 'Campo Obrigatório*';

  if (values.name === undefined) {
    errors.name = error;
  }

  if (values.email === undefined) {
    errors.email = error;
  }

  if (values.genre === undefined) {
    errors.genre = error;
  }

  return errors;
};

const renderInput: React.FC<Input> = ({
  input, label, type, meta, placeholder,
}) => (
  <TextField
    {...input}
    fullWidth
    id="outlined-basic"
    label={label}
    variant="outlined"
    placeholder={placeholder}
    type={type}
    helperText={meta.touched && meta.error}
    error={Boolean(meta.touched && meta.error)}
  />
);

const renderSelect: React.FC<Input> = ({
  input, placeholder, children, label, meta,
}) => (
  <FormControl fullWidth variant="outlined" error={Boolean(meta.touched && meta.error)}>
    <InputLabel>{label}</InputLabel>
    <Select
      {...input}
      placeholder={placeholder}
      labelWidth={35}
    >
      {children}
    </Select>
    {meta.touched && meta.error && (
      <FormHelperText>{meta.error}</FormHelperText>
    )}
  </FormControl>
);

const Form: React.FC<InjectedFormProps & FormProps> = ({ handleSubmit, valid, cart }) => {
  const history = useHistory();

  const total = () => cart.filter((item) => item.price).reduce((sum, current) => sum + (current.price * current.amount), 0);

  const totalFormat = () => formatNumber(total());

  const onSubmit = (data: FormData) => {
    history.push('/purchased', { ...data, price: total() });
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" color="textSecondary">
          Dados do Cliente
        </Typography>
      </Grid>
      <Grid item xs={12}>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={getFormItemWidth(useWindowSize())}>
              <Field
                label="Nome"
                placeholder="Digite seu nome"
                type="text"
                name="name"
                component={renderInput}
              />
            </Grid>
            <Grid item xs={getFormItemWidth(useWindowSize())}>
              <Field
                label="Email"
                placeholder="Digite seu email"
                type="email"
                name="email"
                component={renderInput}
              />
            </Grid>
            <Grid item xs={getFormItemSelectWidth(useWindowSize())}>
              <Field
                label="Sexo"
                placeholder="Selecione"
                type="text"
                name="genre"
                component={renderSelect}
              >
                <MenuItem value="Masculino">Masculino</MenuItem>
                <MenuItem value="Feminino">Feminino</MenuItem>
                <MenuItem value="Outro">Outro</MenuItem>
              </Field>
            </Grid>
          </Grid>
          <Box p={2} />
          <Grid container justify="flex-end" spacing={3}>
            <Grid item xs={getCardItemWidth(useWindowSize())}>
              <Typography variant="h5" color="textSecondary">
                {`Total: ${totalFormat()}`}
              </Typography>
            </Grid>
          </Grid>
          <Grid container justify="flex-end" spacing={3}>
            <Grid item xs={getButtonWidth(useWindowSize())}>
              <Button disabled={!valid || total() === 0} type="submit" variant="contained" color="primary" disableElevation>
                Finalizar Compra
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};


const mapStateToProps = ({ cart }: ApplicationState) => ({
  cart: cart.data,
});

const FormForm = connect(
  mapStateToProps,
)(Form);

export default reduxForm({
  form: 'UserForm',
  validate,
})(FormForm);

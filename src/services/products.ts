/* eslint-disable no-useless-catch */
import api from './api';

const getProductsApi = async () => {
  try {
    const { data } = await api.get('products');
    return data;
  } catch (error) {
    throw error;
  }
};

export default getProductsApi;

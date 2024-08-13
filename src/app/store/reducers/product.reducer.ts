import { createReducer, on } from '@ngrx/store';
import { Product } from '../../models/product.model';
import { addProduct, addProductFailure, addProductSuccess } from '../actions/product.actions';

export interface ProductState {
  products: Product[];
  error: any;
  loading: boolean;
}

export const initialState: ProductState = {
  products: [],
  error: null,
  loading: false,
};

export const productReducer = createReducer(
  initialState,
  on(addProduct, (state) => ({ ...state, loading: true })),
  on(addProductSuccess, (state, { product }) => ({
    ...state,
    loading: false,
    products: [...state.products, product],
  })),
  on(addProductFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

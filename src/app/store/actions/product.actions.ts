import { createAction, props } from '@ngrx/store';
import { Product } from '../../models/product.model';

export const addProduct = createAction(
  '[Product] Add Product',
  props<{ product: Product }>()
);

export const addProductSuccess = createAction(
  '[Product] Add Product Success',
  props<{ product: Product }>()
);

export const addProductFailure = createAction(
  '[Product] Add Product Failure',
  props<{ error: any }>()
);

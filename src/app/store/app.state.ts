import { ActionReducerMap } from '@ngrx/store';
import { productReducer, ProductState } from './reducers/product.reducer';

export interface AppState {
  product: ProductState;
}

export const appReducers: ActionReducerMap<AppState> = {
  product: productReducer,
};

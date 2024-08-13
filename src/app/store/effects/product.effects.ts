import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { addProduct, addProductFailure, addProductSuccess } from '../actions/product.actions';
import { ProductService } from '../../services/product.services';

@Injectable()
export class ProductEffects {
  constructor(private actions$: Actions, private productService: ProductService) {}

  addProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addProduct),
      mergeMap(action =>
        this.productService.addProduct(action.product).pipe(
          map(product => addProductSuccess({ product })),
          catchError(error => {
            console.error('Add Product Error:', error);
            return of(addProductFailure({ error }));
          })
        )
      )
    )
  );
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { addProduct } from '../../store/actions/product.actions';

@Component({
  selector: 'app-add-product',
  standalone:true,
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  imports:[ReactiveFormsModule]
})
export class AddProductComponent {
  productForm: FormGroup;

  constructor(private store: Store<AppState>, private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]]
    });
  }

  addProduct() {
    if (this.productForm.valid) {
      const product = this.productForm.value;
      this.store.dispatch(addProduct({ product }));
    }
  }
}

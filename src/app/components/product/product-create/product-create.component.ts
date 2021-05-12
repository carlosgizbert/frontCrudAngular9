import { Product } from '../../product/product.model';
import { ProductService } from '../../product/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name : '',
    price : 0
  }


  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

btCreateProduct(): void{
  // subscribe() informa quando a resposta http chega
  // função arrow => é uma sintaxe pra dizer que o metodo tem "return"
  this.productService.create(this.product).subscribe(() => {
    this.productService.showMessage('Operação executada com sucesso')
    this.router.navigate(['/products'])
  });
}

btCancel(){
  this.router.navigate(['/products']);
}

}

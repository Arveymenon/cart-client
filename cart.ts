import { CartInterface, CartUpdateResponse, UserCart } from './interfaces';
import { ProductAdd }  from './services/add'
import { viewCart }  from './services/cart'


export class Cart implements CartInterface{
    isUpdated: boolean = false
    public productAdd = new ProductAdd

    constructor(){
    }

    add(productId: string, quantity?: number){
      const a: CartUpdateResponse = {error: false, response: 'Updated'};
      this.productAdd.add(productId, quantity)
      return a
    }
    
    remove(productId: string, quantity?: number){
      const a: CartUpdateResponse = {error: false, response: 'Updated'}; 
      return a
    }
    
    view(){
      return viewCart()
    }
    
    find(){
      return true
    }
    
    initialize(){
      const a: UserCart[] = []; 
      return a
    }
    
    updateBackend(){
      return false
    }
    
    clear(){
      return false
    }
}


  // "publishConfig": {
  //   // "registry": "https://npm.pkg.github.com/Arveymenon"
  //   "registry": "https://npm.pkg.github.com/Arveymenon"
  // },
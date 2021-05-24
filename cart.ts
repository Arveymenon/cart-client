import { CartInterface, CartUpdateResponse, UserCart } from './interfaces';

import { viewCart }  from './services/cart'

import { ProductAdd }  from './services/add'
import { ProductRemove }  from './services/remove'


export class Cart implements CartInterface{
    isUpdated: boolean = false
    public productAdd = new ProductAdd
    public productRemove = new ProductRemove

    constructor(){
    }

    add(productId: string, quantity?: number){
      return this.productAdd.add(productId, quantity)
    }
    
    remove(productId: string, quantity?: number){
      return this.productRemove.remove(productId, quantity)
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
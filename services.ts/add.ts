import { cart } from "./cart";

export function add(productId: string, quantity?: number){
     console.log(cart);

     let index = cart.findIndex(o => o.productId == productId)
     if(index > -1){
         cart[index].quantity =+ 1
     } else {
         cart.push({
             productId,
             quantity
         })
     }
    
     index = null
}


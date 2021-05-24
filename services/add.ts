import { cart } from "./cart";
import { CartUpdateResponse } from './../interfaces'

export class ProductAdd{
    
    add(productId: string, quantity?: number) : CartUpdateResponse {
        
        try {
            let index = cart.findIndex(o => o.productId == productId)
    
            if(index > -1){
                cart[index].quantity = quantity ? quantity : cart[index].quantity + 1
             } else {
                cart.push({
                    productId: productId,
                    quantity: quantity ? quantity : 1
                })
            }
            index = 0
            
            let res: CartUpdateResponse = {
                error: false,
                response: 'Item Added'
            };
            return res
        }
        catch(e){
            let res: CartUpdateResponse = {
                error: true,
                response: 'Item Not Added'
            };
            return res
        }

    }
}
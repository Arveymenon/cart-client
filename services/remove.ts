import { CartUpdateResponse } from "../interfaces";
import { cart } from "./cart";

export class ProductRemove{

    remove(productId: string, quantity?: number) : CartUpdateResponse {
        
        try {
            let index = cart.findIndex(o => o.productId == productId)
            
            const cart_quantity = cart[index].quantity

            if(quantity){
                cart[index].quantity = quantity
            }
            else {
                if(cart_quantity == 1){
                    cart.splice(index,1)
                } else {
                    cart[index].quantity = cart_quantity - 1
                }
            }
            
            index = 0

            let res: CartUpdateResponse = {
                error: false,
                response: 'Item Added'
            };
            
            return res
            
        } catch(e){
            let res: CartUpdateResponse = {
                error: false,
                response: e
            };

            return res
        }
    }
}
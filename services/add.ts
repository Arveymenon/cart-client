import { cart } from "./cart";

export class ProductAdd{

    add(productId: string, quantity?: number){
    
        let index = cart.findIndex(o => o.productId == productId)
        if(index > -1){
            cart[index].quantity += 1
         } else {
            cart.push({
                productId: productId,
                quantity: quantity ? quantity : 1
            })
        }
        
        index = 0
    
        console.log(cart);
    }
}

// export function productAdd(productId: string, quantity?: number){
    
//     let index = cart.findIndex(o => o.productId == productId)
//     if(index > -1){
//         cart[index].quantity =+ 1
//      } else {
//         cart.push({
//             productId: productId,
//             quantity: quantity ? quantity : 1
//         })
//     }
    
//     index = 0

//     console.log(cart);
// }


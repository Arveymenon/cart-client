"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAdd = void 0;
var cart_1 = require("./cart");
var ProductAdd = /** @class */ (function () {
    function ProductAdd() {
    }
    ProductAdd.prototype.add = function (productId, quantity) {
        var index = cart_1.cart.findIndex(function (o) { return o.productId == productId; });
        if (index > -1) {
            cart_1.cart[index].quantity += 1;
        }
        else {
            cart_1.cart.push({
                productId: productId,
                quantity: quantity ? quantity : 1
            });
        }
        index = 0;
        console.log(cart_1.cart);
    };
    return ProductAdd;
}());
exports.ProductAdd = ProductAdd;
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

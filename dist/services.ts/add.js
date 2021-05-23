"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
var cart_1 = require("./cart");
function add(productId, quantity) {
    console.log(cart_1.cart);
    var index = cart_1.cart.findIndex(function (o) { return o.productId == productId; });
    if (index > -1) {
        cart_1.cart[index].quantity = +1;
    }
    else {
        cart_1.cart.push({
            productId: productId,
            quantity: quantity ? quantity : 1
        });
    }
    index = 0;
}
exports.add = add;

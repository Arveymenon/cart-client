"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRemove = void 0;
var cart_1 = require("./cart");
var ProductRemove = /** @class */ (function () {
    function ProductRemove() {
    }
    ProductRemove.prototype.remove = function (productId, quantity) {
        try {
            var index = cart_1.cart.findIndex(function (o) { return o.productId == productId; });
            var cart_quantity = cart_1.cart[index].quantity;
            if (quantity) {
                cart_1.cart[index].quantity = quantity;
            }
            else {
                if (cart_quantity == 1) {
                    cart_1.cart.splice(index, 1);
                }
                else {
                    cart_1.cart[index].quantity = cart_quantity - 1;
                }
            }
            index = 0;
            var res = {
                error: false,
                response: 'Item Added'
            };
            return res;
        }
        catch (e) {
            var res = {
                error: false,
                response: e
            };
            return res;
        }
    };
    return ProductRemove;
}());
exports.ProductRemove = ProductRemove;

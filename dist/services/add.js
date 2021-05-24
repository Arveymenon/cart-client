"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAdd = void 0;
var cart_1 = require("./cart");
var ProductAdd = /** @class */ (function () {
    function ProductAdd() {
    }
    ProductAdd.prototype.add = function (productId, quantity) {
        try {
            var index = cart_1.cart.findIndex(function (o) { return o.productId == productId; });
            if (index > -1) {
                cart_1.cart[index].quantity = quantity ? quantity : cart_1.cart[index].quantity + 1;
            }
            else {
                cart_1.cart.push({
                    productId: productId,
                    quantity: quantity ? quantity : 1
                });
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
                error: true,
                response: 'Item Not Added'
            };
            return res;
        }
    };
    return ProductAdd;
}());
exports.ProductAdd = ProductAdd;

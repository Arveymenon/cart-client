"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
var add_1 = require("./services/add");
var cart_1 = require("./services/cart");
var Cart = /** @class */ (function () {
    function Cart() {
        this.isUpdated = false;
        this.productAdd = new add_1.ProductAdd;
        this.add("123", 1);
        this.add("123", 1);
        this.add("123", 1);
        this.add("123", 1);
        console.log('view');
        this.view();
    }
    Cart.prototype.add = function (productId, quantity) {
        var a = { error: false, response: 'Updated' };
        this.productAdd.add(productId, quantity);
        return a;
    };
    Cart.prototype.remove = function (productId, quantity) {
        var a = { error: false, response: 'Updated' };
        return a;
    };
    Cart.prototype.view = function () {
        console.log(cart_1.viewCart());
        return cart_1.viewCart();
    };
    Cart.prototype.find = function () {
        return true;
    };
    Cart.prototype.initialize = function () {
        var a = [];
        return a;
    };
    Cart.prototype.updateBackend = function () {
        return false;
    };
    Cart.prototype.clear = function () {
        return false;
    };
    return Cart;
}());
exports.Cart = Cart;
// "publishConfig": {
//   // "registry": "https://npm.pkg.github.com/Arveymenon"
//   "registry": "https://npm.pkg.github.com/Arveymenon"
// },

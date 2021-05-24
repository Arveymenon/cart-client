"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
var cart_1 = require("./services/cart");
var add_1 = require("./services/add");
var remove_1 = require("./services/remove");
var Cart = /** @class */ (function () {
    function Cart() {
        this.isUpdated = false;
        this.productAdd = new add_1.ProductAdd;
        this.productRemove = new remove_1.ProductRemove;
    }
    Cart.prototype.add = function (productId, quantity) {
        return this.productAdd.add(productId, quantity);
    };
    Cart.prototype.remove = function (productId, quantity) {
        return this.productRemove.remove(productId, quantity);
    };
    Cart.prototype.view = function () {
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

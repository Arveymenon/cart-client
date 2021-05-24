// Client Side of the System
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var cart_1 = require("./cart");
var cart = new cart_1.Cart();
cart.add('123');
cart.add('124');
cart.add('125');
console.log('View Cart', cart.view());
cart.remove('123', 5);
console.log('View Cart', cart.view());
console.log('The application is listening on port 3000!');

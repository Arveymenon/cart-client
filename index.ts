// Client Side of the System

'use strict';

import { Cart } from './cart';

var cart = new Cart()

cart.add('123')
cart.add('124')
cart.add('125')
console.log('View Cart',cart.view())

cart.remove('123',5)
console.log('View Cart',cart.view())

console.log('The application is listening on port 3000!');
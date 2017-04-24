'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sayHello = sayHello;
function sayHello() {
  var p = document.createElement('p');
  p.textContent = 'Hello. Seems that everything is working!';
  document.body.appendChild(p);
}
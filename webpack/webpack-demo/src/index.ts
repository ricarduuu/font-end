// import("./first").then(first => {
//   f.say();
// })
import  './index.css';
import {  first } from './first'
first.say();
function create(): Node {
  let div = document.createElement('div');
  div.className = "rect";
  div.innerHTML = 'stupid !'
  return div;
}
document.body.append(create());
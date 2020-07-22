// import './index.css'
import First from "./first"
const f = new First();
f.say();
function create() {
  let div = document.createElement('div');
  div.className = "rect";
  div.innerHTML = 'stupid !'
  return div;
}
document.body.append(create());
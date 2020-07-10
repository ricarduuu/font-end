// import './index.css'
function create() {
  let div = document.createElement('div');
  div.className = "rect";
  div.innerHTML = 'stupid !'
  return div;
}
document.body.append(create());
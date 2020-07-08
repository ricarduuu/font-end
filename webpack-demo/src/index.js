function create() {
  let div = document.createElement('div');
  div.innerHTML = 'stupid !'
  return div;
}
document.body.append(create());
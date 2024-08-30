const logo = [];
function adder(){
  const neta = document.querySelector('.mla');
  const party = neta.value;
  logo.push(party);
  console.log(logo);
  neta.value = '';
  renderhtml();
  
}
function renderhtml(){
let todohtml = '';
for (i=0;i<logo.length;i++){
  const todo = logo[i];
  const htmltodo = `<p>${todo}</p>`;
  todohtml+=htmltodo;
}

document.querySelector('.todohtml').innerHTML = todohtml;
}


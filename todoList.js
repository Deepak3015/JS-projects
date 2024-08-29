const todoList =[];
function collector(){
  const deepak = document.querySelector('.data');
  const dataTodo = deepak.value;
  todoList.push(dataTodo);
  console.log(todoList);
  deepak.value = '';
};

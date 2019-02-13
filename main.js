import Menu from './menu.js';

const menu1 = new Menu({
  element: document.querySelector('[data-component="menu"]'),
  title: 'Start title',
});

let data = {
  title: 'My title',
};

console.log(data);

menu1.setProps(data);

setTimeout(() => {
  console.log(data);
}, 5000);

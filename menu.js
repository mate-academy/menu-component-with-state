import Component from './component.js';

export default class Menu extends Component {
  constructor({ element, title = '12312', items = [1, 2, 3] }) {
    super({ element });

    this._title = title;
    this._items = items;

    this._render();
  }

  _render() {
    this._element.innerHTML = `
      <h2 class="menu__title">${ this._title }</h2>
      <ul class="menu__items-list">
        ${ this._items.map(item => `
  
          <li class="menu__item">${ item }</li>
  
        `).join('') }
      </ul>
    `;
  }
}

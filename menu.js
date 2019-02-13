import Component from './component.js';

export default class Menu extends Component {
  constructor({ element, title = 'Title 1', items = [1, 2, 3] }) {
    super({ element });

    this._title = title;
    this._items = items;

    this._isOpen = true;

    this._render();

    this.on('click', 'title', () => this._toggle());
  }

  _toggle() {
    this._isOpen = !this._isOpen;

    this._render();
  }

  _render() {
    this._element.innerHTML = `
      <h2 class="menu__title" data-element="title">
        ${ this._title }
      </h2>
      
      <ul
        class="menu__items-list"
        ${ this._isOpen ? '' : 'hidden'}
      >
        ${ this._items.map(item => `
  
          <li class="menu__item">${ item }</li>
  
        `).join('') }
      </ul>
    `;
  }
}

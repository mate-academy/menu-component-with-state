import Component from './component.js';

export default class Menu extends Component {
  constructor({ element, title = 'Title 1', items = [1, 2, 3] }) {
    super({ element });

    this._props = {
      title: title,
      items: items,

      isOpen: true,
    };

    this._render();

    this.on('click', 'title', () => this._toggle());
  }

  setProps(newProps) {
    this._props = {
      ...this._props,
      ...newProps,
    };

    this._render();
  }

  _toggle() {
    this._props.isOpen = !this._props.isOpen;

    this._render();
  }

  _render() {
    console.log('render', this._props.title);

    this._element.innerHTML = `
      <h2 class="menu__title" data-element="title">
        ${ this._props.title }
      </h2>
      
      <ul
        class="menu__items-list"
        ${ this._props.isOpen ? '' : 'hidden'}
      >
        ${ this._props.items.map(item => `
  
          <li class="menu__item">${ item }</li>
  
        `).join('') }
      </ul>
    `;
  }
}

import Component from './component.js';

export default class Menu extends Component {
  constructor({ element, title = 'Title 1', items = [1, 2, 3] }) {
    super({ element });

    this._props = {
      title: title,
      items: items,
    };

    this._state = {
      isOpen: true,
    };

    this._render(this._props, this._state);

    this.on('click', 'title', () => this._toggle());
  }

  _toggle() {
    this._setState({
      isOpen: !this._state.isOpen,
    });
  }

  _updateView(props, state) {
    this._render(props, state);
  }

  _render(props, state) {
    console.log('render', props.title);

    this._element.innerHTML = `
      <h2 class="menu__title" data-element="title">
        ${ props.title }
      </h2>
      
      <ul
        class="menu__items-list"
        ${ state.isOpen ? '' : 'hidden'}
      >
        ${ props.items.map(item => `
  
          <li class="menu__item">${ item }</li>
  
        `).join('') }
      </ul>
    `;
  }
}

// https://github.com/Heydon/bruck#d-rawer

export default class Drawer extends HTMLElement {
  constructor() {
    super();
    this.setAttribute('role', 'region');
    this.first = this.querySelector(':first-child');
    this.removeChild(this.first);
    this.level = this.getAttribute('level') || '2';

    const tmpl = document.createElement('template');
    tmpl.innerHTML = `
    <h2 aria-level="${this.level}">
      <button class="handle" aria-expanded="false">
        <span>
          ${this.first.textContent}
        </span>
        <svg viewBox="0 0 16 16">
          <path class="v" d="M8,0 8,16" />
          <path d="M0,8 16,8" />
        </svg>
      </button>
    </h2>
    <div class="content" hidden>
      ${this.innerHTML}
    </div>
    `;

    this.innerHTML = null;
    this.appendChild(tmpl.content.cloneNode(true));

    this.button = this.querySelector('.handle');
    this.content = this.querySelector('.content');

    this.switchState = () => {
      let expanded = this.hasAttribute('open');
      this.button.setAttribute('aria-expanded', expanded);
      this.content.hidden = !expanded;
    }

    this.button.addEventListener('click', () => {
      this.hasAttribute('open')
        ? this.removeAttribute('open')
        : this.setAttribute('open', 'open');
    });

    this.setAttribute('role', 'region');
    this.setAttribute('aria-label', 'Collapsible section');
  }

  static get observedAttributes() {
    return ['open'];
  }

  attributeChangedCallback(name) {
    if (name === 'open') {
      this.switchState();
    }
  }
}

customElements.define('d-rawer', Drawer);
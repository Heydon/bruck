/*
Usage: 

Attributes: 
*/

export default class Flow extends HTMLElement {
  constructor() {
    super();

    const tmpl = document.createElement('template');
    tmpl.innerHTML = `
      <style>
        :host {
          display: block;
          position: relative;
        }

        button {
          all: unset;
          color: var(--color-light);
          background-color: var(--color-dark);
          font-weight: bold;
          line-height: 1;
          padding: var(--s-2);
          position: absolute;
          top: 50%;
          left: -9999px;
          transform: translateY(-50%);
        }

        button:focus,
        :host(:hover) button {
          left: auto;
        }

        [aria-label="next"] {
          right: 0;
        }

        svg {
          width: 1rem;
          height: 1rem;
          fill: none;
          stroke: currentColor;
          stroke-width: 2;
        }
      </style>
      <button aria-label="previous">
        <svg viewBox="0 0 10 10">
          <path d="M8,2 3,5 8,8" />
        </svg>
      </button>
      <button aria-label="next">
        <svg viewBox="0 0 10 10">
          <path d="M2,2 7,5 2,8" />
        </svg>
      </button>
      <slot></slot>
    `;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(tmpl.content.cloneNode(true));

    this.elems = Array.from(this.children);
    this.elems.forEach((elem, i) => {
      if (i > 0) {
        elem.hidden = true;
      }
    });

    this.switchElem = dir => {
      let currentElem = this.elems.find(elem => !elem.hidden);
      let currentIndex = this.elems.indexOf(currentElem);
      let modifier = dir === 'prev' ? -1 : 1;
      let newIndex = currentIndex + modifier;
      if (newIndex < this.elems.length && newIndex > -1) {
        currentElem.hidden = true;
        this.elems[newIndex].hidden = false;
      }
    }

    this.prev = this.shadowRoot.querySelector('[aria-label="previous"]');
    this.next = this.shadowRoot.querySelector('[aria-label="next"]');
    this.prev.onclick = () => this.switchElem('prev');
    this.next.onclick = () => this.switchElem('next');

    this.setAttribute('role', 'region');
    this.setAttribute('aria-label', `Sequence of ${this.elems.length} steps in a flow`);

  }
}

customElements.define('f-low', Flow);
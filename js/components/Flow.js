// https://github.com/Heydon/bruck#f-low

export default class Flow extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.hideControls = this.hasAttribute('hideControls');

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: relative;
        }

        button {
          all: unset;
          color: var(--color-light);
          background-color: var(--color-dark);
          line-height: 1;
          padding: var(--s-2);
          position: absolute;
          top: 50%;
          left: -9999px ${this.hideControls ? '!important' : ''};
          transform: translateY(-50%);
          z-index: 2;
        }

        button:focus {
          outline: var(--outline);
        }

        [aria-label="previous"]:not([disabled]):focus,
        :host(:hover) [aria-label="previous"]:not([disabled]) {
          left: var(--s-1);
        }

        [aria-label="next"]:not([disabled]):focus,
        :host(:hover) [aria-label="next"]:not([disabled]) {
          left: auto;
          right: var(--s-1);
        }

        svg {
          width: var(--s-1);
          height: var(--s-1);
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

    this.elems = Array.from(this.children);
    this.elems.forEach((elem, i) => {
      if (i > 0) {
        elem.hidden = true;
      }
    });

    this.prevBtn = this.shadowRoot.querySelector('[aria-label="previous"]');
    this.nextBtn = this.shadowRoot.querySelector('[aria-label="next"]');
    this.prevBtn.disabled = true;

    this.goTo = (index) => {
      let currentElem = this.elems.find(elem => !elem.hidden);
      let newElem = this.elems[index];

      index === 0 ? this.prevBtn.disabled = true : this.prevBtn.disabled = false;
      index === this.elems.length - 1 ? this.nextBtn.disabled = true : this.nextBtn.disabled = false;

      if (newElem) {
        currentElem.hidden = true;
        newElem.hidden = false;
      }
    }

    this.prev = () => {
      let currentIndex = this.elems.findIndex(elem => !elem.hidden);
      this.goTo(currentIndex - 1);
    }


    this.next = () => {
      let currentIndex = this.elems.findIndex(elem => !elem.hidden);
      this.goTo(currentIndex + 1);
    }

    this.prevBtn.onclick = () => this.prev();
    this.nextBtn.onclick = () => this.next();

    this.setAttribute('role', 'region');
    this.setAttribute('aria-label', `Sequence of ${this.elems.length} steps`);

  }
}

customElements.define('f-low', Flow);
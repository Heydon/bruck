// https://github.com/Heydon/bruck#c-omment

export default class Comment extends HTMLElement {
  constructor() {
    super();
    const wording = this.getAttribute('wording') || 'TBC';

    const tmpl = document.createElement('template');
    tmpl.innerHTML = `
      <style>
        .container {
          position: relative;
          overflow: hidden;         
        }

        button {
          all: unset;
          color: var(--color-light);
          background-color: var(--color-dark);
          font-weight: bold;
          line-height: 1;
          padding: var(--s-2);
          z-index: 1;
        }

        button:focus {
          outline: var(--outline);
        }

        [aria-haspopup], 
        [aria-label^="close"] {
          position: absolute;
          top: calc(var(--s5) * -1);
          right: var(--s-1);
        }

        [aria-haspopup]:focus,
        .container:hover [aria-haspopup],
        [aria-label^="close"] {
          top: var(--s-1);
        }

        .comment {
          background-color: var(--color-dark);
          color: var(--color-light);
          padding: var(--s1);
          overflow-y: auto;
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0; 
          z-index: var(--zHighest);
        }

        .wording {
          text-align: left;
          margin-top: var(--s1);
          outline: none;
        }
      </style>
      <div class="container">
        <div class="comment" hidden tabindex="-1">
        <div class="wording" tabindex="-1">
          ${wording}
        </div>
        <button aria-label="close comment">X</button>
      </div>
      <button aria-haspopup="true" aria-label="read comment">?</button>
      <slot></slot>
    `;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(tmpl.content.cloneNode(true));

    this.setAttribute('role', 'region');

    this.openButton = this.shadowRoot.querySelector('[aria-haspopup]');
    this.comment = this.shadowRoot.querySelector('.comment');
    this.wording = this.comment.querySelector('.wording');
    this.closeButton = this.comment.querySelector('button');

    this.open = () => {
      this.comment.hidden = false;
      this.wording.focus();
      this.comment.scrollTop = 0;
    }

    this.close = () => {
      this.comment.hidden = true;
      this.openButton.focus();
    }

    this.openButton.addEventListener('click', this.open);
    this.closeButton.addEventListener('click', this.close);
  }
}

customElements.define('c-omment', Comment);
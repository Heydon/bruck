/*
Usage: 
  <c-omment wording="This is x">
    <!-- section being commented on -->
  </c-omment>
Attributes: 
  - wording: [string] (default: 'TBC')
*/

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

        .comment {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0; 
        }

        button {
          all: unset;
          color: var(--color-light);
          background-color: var(--color-dark);
          font-weight: bold;
          line-height: 1;
          padding: var(--s-2);
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
          z-index: 1000;
          background-color: var(--color-dark);
          color: var(--color-light);
          padding: var(--s1);
          overflow-y: auto;
        }

        .wording {
          text-align: left;
          margin-top: var(--s1);
          outline: none;
        }
      </style>
      <div class="container">
        <button aria-haspopup="true" aria-label="read comment">?</button>
        <div class="comment" hidden tabindex="-1">
        <div class="wording" tabindex="-1">
          ${wording}
        </div>
        <button aria-label="close comment">X</button>
      </div>
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
      console.log(this.comment);
      this.comment.hidden = false;
      this.wording.focus();
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
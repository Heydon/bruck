import { BaseElement } from '../../Base.js';
import commentSheet from './Comment.css' assert { type: 'css' };

/**
 * @tag c-omment
 * @attr {string} [padding=1.5rem] - A CSS padding value
 * @attr {string} [border=0.125rem] - A CSS length value for the border’s width
 * @summary Encloses elements in a box
 */
class CommentElement extends BaseElement {
	constructor() {
    super();
    this.shadowRoot.adoptedStyleSheets = [commentSheet];
    const id = this.random.string(6);
    this.shadowRoot.innerHTML = `
			<div class="comment">
        <button part="button" type="button" aria-label="read comment" popovertarget="comment-${id}">?</button>
        <div part="popover" id="comment-${id}" popover>
          <slot name="comment"></slot>
        </div>
        <slot name="commented"></slot>
      </div>
    `;
	}

  connectedCallback() {
    const popover = this.shadowRoot.querySelector('[popover]');
    const button = this.shadowRoot.querySelector('button');
    popover.addEventListener('toggle', e => {
      button.classList.toggle('selected');
    });
  }
}

export { CommentElement };
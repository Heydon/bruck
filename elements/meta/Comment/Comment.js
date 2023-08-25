import { BaseElement } from '../../Base.js';

/**
 * @tag c-omment
 * @attr {string} [padding=1.5rem] - A CSS padding value
 * @attr {string} [border=0.125rem] - A CSS length value for the border’s width
 * @summary Encloses elements in a box
 */
class CommentElement extends BaseElement {
	constructor() {
		super();
		const id = this.random.string(6);
		this.shadowRoot.innerHTML = `
      <style>
        .comment {
          position: relative;
        }
        
        button {
          position: absolute;
          inset-block-start: 0.5rem;
          inset-inline-end: 0.5rem;
          clip-path: inset(100%);
        }
        
        .comment:hover button, button:focus, .selected {
          clip-path: none;
        }
        
        .selected {
          outline: 0.125em dashed var(--color-fore);
          outline-offset: 0.125rem;
        }
      </style>
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
		popover.addEventListener('toggle', () => {
			button.classList.toggle('selected');
		});
	}
}

export { CommentElement };
import { BaseElement } from '../../Base.js';

/**
 * @tag l-ine
 * @summary A simple line / horizontal rule
 */
class LineElement extends BaseElement {
	constructor() {
		super();
		this.attachShadow({mode: 'open'});
		this.template = document.createElement('template');
	}

	render() {
		this.shadowRoot.innerHTML = '';
		this.template.innerHTML = `
      <style>
        hr {
          border-top: ${this.thickness} solid;
        }
      </style>
      <hr/>
    `;
		this.shadowRoot.appendChild(this.template.content.cloneNode(true));
	}

	get thickness() {
		return this.getAttribute('thickness') || '0.5rem';
	}

	set thickness(value) {
		if (value) {
			this.setAttribute('thickness', value);
		} else {
			this.removeAttribute('thickness');
		}
	}

	static get observedAttributes() {
		return ['thickness'].concat(super.observedAttributes);
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback() {
		this.render();
	}
}

export { LineElement };
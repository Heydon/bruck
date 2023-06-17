import baseSheet from './Base.css' assert { type: 'css' };

/**
 * @summary The base class for creating elements
 */
class BaseElement extends HTMLElement {
	constructor() {
		super();
		
		this.attachShadow({mode: 'open'});
		this.shadowRoot.adoptedStyleSheets = [baseSheet];

		this.random =  { 
			integerBetween(min, max) {
				min = min > max ? max : min;
				max = max < min ? min : max;
				return Math.floor(Math.random() * (max - min + 1) + min);
			},
			floatBetween(min, max, places = 3) {
				min = min > max ? max : min;
				max = max < min ? min : max;
				return (Math.random() * (max - min + 1) + min).toFixed(places);
			},
			oneOf(array) {
				array = array || [0];
				return array[Math.floor(Math.random() * array.length)];
			},
			shuffle(array) {
				return array.map(value => ({ value, sort: Math.random() }))
					.sort((a, b) => a.sort - b.sort)
					.map(({ value }) => value);
			},
			probability(fraction) {
				return Math.random() <= fraction;
			}
		};
		this.betweenPattern = new RegExp('[0-9]+[-]{1}[0-9]+');
		this.integerPattern = new RegExp('^[0-9]*$');
	}

	toArray(string) {
		if (string.includes(',')) {
			return string.split(',').map(s => s.trim());
		} else {
			return string.split(' ').filter(s => s !== '');
		}
	}
  
	toString(array) {
		return array.join(' ');
	}

	integerOrBetween(string, prop) {
		if (this.integerPattern.test(string)) {
			return parseInt(string);
		}
		if (!this.betweenPattern.test(string)) {
			throw new Error(`The value of the ${prop} property must be either an integer or follow the format [integer]-[integer]`);
		}		
		const arr = string.split('-').map(int => parseInt(int.trim()));
		return this.random.integerBetween(arr[0], arr[1]);
	}

	isValidUrl(url) {
		try {
			new URL(url);
		} catch (e) {
			console.error(e);
			return false;
		}
		return true;
	}
	

	static get observedAttributes() {
		return [];
	}
}

export { BaseElement };
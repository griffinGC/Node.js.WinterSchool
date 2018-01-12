'use strict';

const component = require('../icon');
console.log(component({
	icon: {
		prefix: 'fa',
		cls: ['icon-more'],
		// href: '',
		name: 'spinner',
		html: '<strong>带html的</strong>',
		text: 'icon',
	},
}));

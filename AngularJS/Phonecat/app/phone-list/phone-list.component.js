'use strict';

// Component phoneList, now separated into own phoneList module
angular.module('phoneList')
.component('phoneList', {
	templateUrl: 'phone-list/phone-list.template.html',
	controller: function PhoneListController() {
		this.query = '';
		this.orderProp = 'age'; // name || age
		
		this.phones = [
			{
				name: 'Nexus S',
				snippet: 'Fast just got faster with Nexus S.',
				age: 1
			}, {
				name: 'Motorola XOOM\u2122 with Wi-Fi',
				snippet: 'The Next, Next Generation tablet.',
				age: 2
			}, {
				name: 'MOTOROLA XOOM\u2122',
				snippet: 'The Next, Next Generation tablet.',
				age: 3
			}
		];	
	}
});
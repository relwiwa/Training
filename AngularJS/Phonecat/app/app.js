'use strict';

// Module

angular.module('phonecatApp', []);

// Controller using controller as-syntax

angular.module('phonecatApp')
.controller('PhoneListController', [function () {
	this.greeting = 'Welcome';
	
	this.phones = [
		{
			name: 'Nexus S',
			snippet: 'Fast just got faster with Nexus S.'
		}, {
			name: 'Motorola XOOM™ with Wi-Fi',
			snippet: 'The Next, Next Generation tablet.'
		}, {
			name: 'MOTOROLA XOOM™',
			snippet: 'The Next, Next Generation tablet.'
		}
	];	
}]);
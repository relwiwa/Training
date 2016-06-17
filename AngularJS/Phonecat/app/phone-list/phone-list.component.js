'use strict';

// Component phoneList, now separated into own phoneList module
angular.module('phoneList')
.component('phoneList', {
	templateUrl: 'phone-list/phone-list.template.html',
	controller: ['$http', function PhoneListController($http) {
		var self = this;
		self.query = '';
		self.orderProp = 'age'; // name || age
		
		$http.get('phones/phones.json')
		.then(function(response) {
//			self.phones = response.data.slice(0, 5);
			self.phones = response.data;
		}, function(error) {
			self.phones = [];
			console.log("error fetching phones");
		});
	}]
});
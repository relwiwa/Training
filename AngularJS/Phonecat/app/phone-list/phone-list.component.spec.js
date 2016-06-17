'use strict';

describe('phoneList', function() {
	
	beforeEach(module('phoneList'));
	
	describe('PhoneListController', function() {
		var $httpBackend, ctrl;
		
		beforeEach(inject(function($componentController, _$httpBackend_) {
			$httpBackend = _$httpBackend_;
			$httpBackend.expectGET('phones/phones.json')
			.respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
			ctrl = $componentController('phoneList');
		}));

		it('should create a `phones` property with 2 phones fetched with `$http`', function() {
			expect(ctrl.phones).toBeUndefined();
			// 'flush' simulated server response making it available
			$httpBackend.flush();
			expect(ctrl.phones.length).toBe(2);
		});
		
		it('should set a default value for `orderProp`', function() {
			expect(ctrl.orderProp).toBe('age');
		});
		
	});
});
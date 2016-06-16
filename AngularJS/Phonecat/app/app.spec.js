'use strict';

describe('PhoneListController', function() {
	
	// load angular module
	beforeEach(module('phonecatApp'));
	
	it('should create a `phones` model with 3 phones',
		 // inject controller service
		inject(function($controller) {
		
		// create an instance of specific controller
		var ctrl = $controller('PhoneListController');
		
		//test case reflecting 'controller as'-syntax
		expect(ctrl.phones.length).toBe(3);
	}));
		
	it('should include a greeting', inject(function($controller) {
		
		var ctrl = $controller('PhoneListController');
		
		expect(ctrl.greeting).toBeDefined();
		expect(ctrl.greeting).not.toBeNull();
		expect(ctrl.greeting).not.toBe('');
	}));
	
});
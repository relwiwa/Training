'use strict';

describe('greetUser', function() {

	beforeEach(module('greetUser'));
	
	describe('GreetUserController', function() {

		it('should include a greeting', inject(function($componentController) {
		
			var ctrl = $componentController('greetUser');

			expect(ctrl.greeting).toBeDefined();
			expect(ctrl.greeting).not.toBeNull();
			expect(ctrl.greeting).not.toBe('');

		}));
	});
});
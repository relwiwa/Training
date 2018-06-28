'use strict';

describe('phoneDetail', function() {
	
	beforeEach(module('phoneDetail'));
	
	describe('PhoneDetailController', function() {
		
		var ctrl, $httpBackend;
		var xyzPhoneData = {
			name: 'phone xyz',
			images: ['image/url1.png', 'image/url2.png']
		};
		
		beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
	
			$httpBackend = _$httpBackend_;
			$httpBackend.expectGET('phones/xyz.json')
			.respond(xyzPhoneData);
			$routeParams.phoneId = 'xyz';
			
			// ctrl needs to be instantiated after $httpBackend request
			ctrl = $componentController('phoneDetail');

		}));
		
		it('should fetch the phone details', function() {
      jasmine.addCustomEqualityTester(angular.equals);
			
			expect(ctrl.phone).toEqual({});
			
			$httpBackend.flush();
			
			expect(ctrl.phone).toEqual(xyzPhoneData);
			
		});
		
	});
	
});
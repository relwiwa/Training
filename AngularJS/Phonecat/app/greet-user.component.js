'use strict';

// Component greetUser
angular.module('phonecatApp')
.component('greetUser', {
	template: '<h3>{{$ctrl.greeting}}</h3>',
	controller: function GreetUserController() {
		this.greeting = 'Welcome';	
	}
});
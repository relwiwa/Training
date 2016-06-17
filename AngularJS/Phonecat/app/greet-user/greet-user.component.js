'use strict';

// Component greetUser now separated into own module greetUser
angular.module('greetUser')
.component('greetUser', {
	templateUrl: 'greet-user/greet-user.template.html',
	controller: function GreetUserController() {
		this.greeting = 'Welcome';	
	}
});
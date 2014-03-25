'use strict';

// Setting up route
angular.module('mean.users').config(['$stateProvider',
	function($stateProvider) {
		// Users state routing
		$stateProvider.
		state('profile', {
			url: '/settings/profile',
			templateUrl: 'modules/users/views/settings/profile.html'
		}).
		state('password', {
			url: '/settings/password',
			templateUrl: 'modules/users/views/settings/password.html'
		}).
		state('signup', {
			url: '/signup',
			templateUrl: 'modules/users/views/signup.html'
		}).
		state('signin', {
			url: '/signin',
			templateUrl: 'modules/users/views/signin.html'
		}).
        state('editProfile', {
            url: '/users/:userId/edit',
            templateUrl: 'modules/users/views/edit.html'
        });
	}
]);
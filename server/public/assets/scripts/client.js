// CLIENT APP

console.log('Client.js working!!!');
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.
      when('/users', {
        templateUrl: '/assets/views/users.html',
        controller: 'UserController'
      }).
      // when('/register', {
      //   templateUrl: '/assets/views/register.html',
      //   controller: 'RegUserController'
      // }).
      // when('/login', {
      //   templateUrl: 'assets/views/index.html'
      // }).
      otherwise({
        reditrectTo: '/home'
      });
}]);

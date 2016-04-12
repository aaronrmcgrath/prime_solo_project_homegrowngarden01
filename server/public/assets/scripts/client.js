// CLIENT APP

console.log('Client.js working!!!');
var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial']);

myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.
      when('/user', {
        templateUrl: '/routes/user.html',
        controller: 'UserController'
      }).
      when('/home', {
        templateUrl: '/assets/views/routes/home.html',
        controller: 'UserController'
      }).
      when('/search', {
        templateUrl: '/assets/views/routes/search.html',
        controller: 'UserController'
      }).
      when('/addplant', {
        templateUrl: '/assets/views/routes/addplant.html',
        controller: 'UserController' //or have a controller 'AddPlantController' ???
      }).
      otherwise({
        reditrectTo: '/user'
      });
}]);

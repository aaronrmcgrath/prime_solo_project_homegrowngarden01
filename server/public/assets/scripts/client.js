// CLIENT APP

console.log('Client.js working!!!');
var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial']);



myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.
      // when('/user', {
      //   templateUrl: '/routes/user.html',
      //   controller: 'UserController'
      // }).
      when('/home', {
        templateUrl: '/assets/views/routes/home.html',
        controller: 'UserController'
      }).
      when('/garden', {
        templateUrl: '/assets/views/routes/garden.html',
        controller: 'UserController'
      }).
      when('/addplant', {
        templateUrl: '/assets/views/routes/addplant.html',
        controller: 'AddPlantController'
      }).
      otherwise({
        reditrectTo: '/garden'
      });
}]);


// Trying to figure out how to load /garden route on default, not working!!!
// myApp.run(['$routeProvider', function($routeProvider)  {
//   $routeProvider.reload();
// }]);

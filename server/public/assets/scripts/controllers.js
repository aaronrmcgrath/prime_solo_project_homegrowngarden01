// CONTROLLERS

myApp.controller('UserController', ['$scope', 'GardenService', function($scope, GardenService) {


  var gardenService = GardenService;

  gardenService.getUser();

  $scope.test = "Hi!"

  $scope.user = gardenService.user;
  console.log('Controller userObject *: ', $scope.userObject);


  $scope.submit = function() {
    gardenService.getUser();
  };

//     $scope.userName;
//
//     // This happens after page load, which means it has authenticated if it was ever going to
//     // NOT SECURE
//     $http.get('/user').then(function(response) {
//         if(response.data) {
//             $scope.userName = response.data.username;
//             console.log('User Data: ', $scope.userName);
//         } else {
//             $window.location.href = '/index.html';
//             //$location.path = '/';
//         }
//     });


}]);

myApp.controller('RegUserController', ['$scope', 'GardenService', function($scope, GardenService) {
  console.log('Register!');
}]);

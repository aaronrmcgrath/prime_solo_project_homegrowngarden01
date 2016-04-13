// CONTROLLERS

myApp.controller('UserController', ['$scope', 'DataService', function($scope, DataService) {

  var dataService = DataService;

  // dataService.getUser();

  // console.log('DATASERVICE IN CONTROLLER!!!: ', dataService.user);
  $scope.user = dataService.user;
  console.log();
  $scope.gardens = dataService.gardens;
  console.log('Controller userObject *: ', $scope.user);
  console.log('*** ===!> Controller gardens: ', $scope.gardens);

  // dataService.getGarden($scope.user.id);

  // $scope.submit = function() {
  //   gardenService.getUser();
  // };

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


myApp.controller('AddPlantController', ['$scope', 'DataService', function($scope, DataService) {

  var dataService = DataService;
  var createPlantObj = {};


  $scope.submit = function(data) {
    dataService.postPlant(data);
    console.log('CONTORLLER - HERE IS postPlant data: ', data);
    // console.log('CONTROLLER - createPlantObj: ', createPlantObj);
  };

}]);

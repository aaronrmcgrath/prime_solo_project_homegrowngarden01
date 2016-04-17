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


  // dataService.getFormDetails();
  $scope.formDetails = dataService.formInfo;
  console.log('### --- CONTROLLER formDetails: ', $scope.formDetails);

  $scope.changeDate = function (date) {
    console.log('@CONTROLLER DATE BEFORE: ', date);
    date = date.toString();
    date = date.slice(4, 15);
    console.log('!## $ D A T E $ ##! ', date);
    return date;
  };

  $scope.submit = function(data) {
    dataService.postPlant(data);
    console.log('CONTORLLER - HERE IS postPlant data: ', data);
    // console.log('CONTROLLER - createPlantObj: ', createPlantObj);
  };

}]);

myApp.controller('SearchController', ['$scope', 'DataService', function($scope, DataService) {

  var dataService = DataService;
  $scope.search = '';

  console.log('@CONTROLLER, $scope.search: ', $scope.search);
  $scope.getSearch = function (search) {
    if (search.length > 0) {
      dataService.getSearch(search);
    } else {
      dataService.searchResults.results = [];
    }
  };

  $scope.searchResults = dataService.searchResults;


}]);

myApp.controller('AddToGardenController', ['$scope', 'DataService', function($scope, DataService) {

  var dataService = DataService;

  $scope.addToGarden = function(plantID, datePlanted) {
    // console.log('HERE IS index.id @ Controller: ', index.id);
    // var plantID = index.id;
    console.log('HERE IS plantID @ Controller: ', plantID);
    var plant = {
      plantID: plantID,
      datePlanted: datePlanted
    };
    console.log('!@# P L A N T : : : ', plant);
    dataService.addSearchPlant(plant);
  };
}]);

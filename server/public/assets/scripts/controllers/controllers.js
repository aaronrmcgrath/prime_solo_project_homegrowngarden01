// CONTROLLERS

myApp.controller('UserController', ['$scope', 'DataService', function($scope, DataService) {

  var dataService = DataService;

  // dataService.getUser();

  // console.log('DATASERVICE IN CONTROLLER!!!: ', dataService.user);
  $scope.user = dataService.user;
  // console.log();
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
  $scope.createPlantObj = {};


  // dataService.getFormDetails();
  $scope.formDetails = dataService.formInfo;
  // console.log('### --- CONTROLLER formDetails: ', $scope.formDetails);

  var changeDate = function (date) {
    var dateA = '';
    var dateB = '';
    // console.log('@CONTROLLER DATE BEFORE: ', date);
    date = date.toString();
    date = date.slice(4, 15);
    dateB = date.slice(7, 15);
    dateA = date.slice(0, 6);
    date = dateA + ',' + ' ' + dateB;

    // console.log('!## $ D A T E $ ##! ', date);
    return date;
  };

  $scope.submit = function(data) {
    data.date_planted = changeDate(data.date_planted);
    dataService.postPlant(data);
    // console.log('CONTORLLER - HERE IS postPlant data: ', data);
    // console.log('CONTROLLER - createPlantObj: ', $scope.createPlantObj);
    $scope.createPlantObj = {};
    // console.log('$$$ --- == @CONTROLLER createPlantObj after clear: ', $scope.createPlantObj);

    // $scope.userForm.$setPristine();
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

  var changeDate = function (date) {
    var dateA = '';
    var dateB = '';
    // console.log('@CONTROLLER DATE BEFORE: ', date);
    date = date.toString();
    date = date.slice(4, 15);
    dateB = date.slice(7, 15);
    dateA = date.slice(0, 6);
    date = dateA + ',' + ' ' + dateB;

    // console.log('!## $ D A T E $ ##! ', date);
    return date;
  };


  $scope.addToGarden = function(plantID, datePlanted) {
    // console.log('HERE IS index.id @ Controller: ', index.id);
    // var plantID = index.id;
    datePlanted = changeDate(datePlanted);
    // console.log('HERE IS plantID @ Controller: ', plantID);
    var plant = {
      plantID: plantID,
      datePlanted: datePlanted
    };
    console.log('!@# P L A N T : : : ', plant);
    dataService.addSearchPlant(plant);
  };
}]);

// Update plants info in User's Garden
myApp.controller('UpdatePlantController', ['$scope', 'DataService', function($scope, DataService) {

  var dataService = DataService;

  $scope.updatePlant = function(notes, existingNotes, id) {
    if(existingNotes == null) {
      existingNotes = '';
    }

    var newNotes = existingNotes + ' ' + notes;
    // console.log('!!! @CONTROLLER *** NOTES UPDATED!!! : ', newNotes);
    var noteObj = {
      plant_id: id,
      notes: newNotes
    };
    dataService.addNotes(noteObj);
  };

}]);

// Captures plant ID to remove from DOM with a DELETE Call to DB
myApp.controller('RemovePlantController', ['$scope', 'DataService', function($scope, DataService) {

  var dataService = DataService;

  $scope.removePlant = function(plantID) {
    // console.log('###@CONTROLLER - removePlant(plantID): ====>', plantID);
    dataService.deleteGardenPlant(plantID);
  };
}]);

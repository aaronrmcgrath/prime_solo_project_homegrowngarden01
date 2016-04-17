// FACTORY

myApp.factory('DataService', ['$http', '$window', function($http, $window) {
  // var newUser = {};
  var userData = {};
  var userID = 0;
  var gardens = {};
  var formInfo = {};
  var newPlant = {};
  var plantID = 0;
  var gardenID = 0;
  var userSearch = '';
  var searchResults = {};

  var getUser = function(req) {
    $http.get('/user').then(function(res) {

      // console.log('***', res.data);
      // if(res.data) {
      userData.res = res.data;
      userID = userData.res.id;
      getGarden(userID);
      getFormDetails();
      // user.id = res.data.id;
      console.log('User: ', userData);
      // } else {
      // $window.location.href = 'assets/views/index.html';
      //$location.path = '/';
      // }
    });
  }

  // var getGardenID = function(userID) {
  //   $http.get('/data/' + userID + '/gardenID').then()
  // }

  // GET call to get user's plants in the specific garden
  var getGarden = function(userID) {
    $http.get('/data/' + userID).then(function(res) {
      // console.log('Here is the GARDEN: ', res.data);

      gardens.res = res.data;
      console.log('*! -- gardens!!: ', gardens);

      if(gardens.res) {
        var plantArray = gardens.res;
        gardenID = 0;
        for(var i = 0; i < plantArray.length; i++) {
          if(gardenID != plantArray[i].garden_id) {
            gardenID = plantArray[i].garden_id;
          }
        }
        console.log('!# @ FACTORY, here is gardenID: * === >', gardenID);
        gardens.res.garden_id = gardenID;
        console.log('$ FACTORY, here is the garden.res: ', gardens.res);
      } else {
        console.log('FAILED MAKING GARDENID!!!');
      }
    });
  };
  // GET call to get the variety options dynamically from the DB
  var getFormDetails = function(req) {
    $http.get('/form').then(function(res){
      formInfo.res = res.data;
      console.log('!!! @ FACTORY - GET for form: ', formInfo);
    });
  }

  // Posts new plant from the Create Plant form to the plant table in the DB
  var postPlant = function(createPlant) {
    createPlant.garden_id = gardens.res.garden_id;
    // createPlant.date_planted = createPlant.date_planted;
    console.log('@FACTORY- createPlant: ', createPlant);

    $http.post('/data', createPlant).then(function(res) {
      newPlant.res = createPlant;

      newPlant.res.plant_id = res.data;
      plantID = newPlant.res.plant_id;

      console.log('$*# ! @ FACTORY, plantID: ', plantID);
      console.log('!FACTORY***: ', newPlant);
      for(var i = 0; i < plantID.length; i++) {
        console.log(plantID[i]);
        plantID = plantID[i].id;
      };
      console.log('+++ ==> @FACTORY plantID after for(): ', plantID);
      newPlant.res.plant_id = plantID
      console.log('! H E R E   I S   newPlant after everything:  ', newPlant);

      postToGarden(newPlant);
      console.log('BeFoRe -- #*# #*# NEWPLANT: ', newPlant);
      newPlant = {};
      console.log('AfTeR -- #*# #*# NEWPLANT: ', newPlant);

    });
  };


  // Takes user's request to "add" a plant from the search and stores the info in newPlant to be Posted to the garden_plants in the DB
  var addSearchPlant = function (plant) {
    console.log('^^^^^ PLANT: ', plant);
    var res = {
      garden_id: gardenID,
      plant_id: plant.plantID,
      date_planted: plant.datePlanted
    }
    newPlant = {
      res: res
    };
    console.log('^^^%### newPlant @FACTORY in addSearchPlant: ', newPlant, 'Then postToGarden() will run HERE!!!');
    postToGarden(newPlant);
    newPlant = {};
    console.log('#@FACTORY in addSearchPlant # newPlant after ==> : ', newPlant);
  }


  // POSTS plants to a user's garden
  var postToGarden = function (newPlant) {
    $http.post('/gardenplants', newPlant).then(function(res) {
      console.log('*!! @ FACTORY, response from adding new plant to garden: ', res.data);
      console.log('POST ### gardenID in postToGarden() @ FACTORY: ', gardenID);
      getGarden(userID);
    });
  };


  // GET call that searches the DB based on what user inputs in search
  var getSearch = function(userSearch) {
    console.log('%% ## $$ @FACTORY, userSearch: ', userSearch);
    if(userSearch.length > 0){
      $http.get('/search/' + userSearch).then(function(res) {
        console.log('*** SEARCH RESULTS: ', res);
        searchResults.results = res.data;
        console.log('!* # # @FACTORY searchResults: ', searchResults);
      });
    };
  };



  // var postUser = function (data) {
  //   $http.post('/register').then(function (res) {
  //     newUser.data = res.data;
  //     console.log('Here is the newUser obj: ', newUser.data);
  //     return newUser.data;
  //   });
  // };

  // console.log('!!! User Log in Factory: ', userData);

  getUser();

  return {
    getUser: getUser,
    getGarden: getGarden,
    postPlant: postPlant,
    gardens: gardens,
    getFormDetails: getFormDetails,
    formInfo: formInfo,
    newPlant: newPlant,
    getSearch: getSearch,
    searchResults: searchResults,
    postToGarden: postToGarden,
    addSearchPlant: addSearchPlant,
    user: userData

  }


}]);

// FACTORY

myApp.factory('DataService', ['$http', '$window', function($http, $window) {
  // var newUser = {};
  var userData = {};
  var userID = 0;
  var gardens = {};
  var formInfo = {};
  var newPlant = {};
  var gardenID = 0;
  var userSearch = '';

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

  var getGarden = function(userID) {
    $http.get('/data/' + userID).then(function(res) {
      // console.log('Here is the GARDEN: ', res.data);

      gardens.res = res.data;
      console.log('*! -- gardens!!: ', gardens);

      if(gardens.res) {
        var plantArray = gardens.res;
        gardenID = 0;
        for(var i = 0; i < gardens.res.length; i++) {
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

  var getFormDetails = function(req) {
    $http.get('/form').then(function(res){
      formInfo.res = res.data;
      console.log('!!! @ FACTORY - GET for form: ', formInfo);
    });
  }

  var postPlant = function(createPlant) {
    createPlant.garden_id = gardens.res.garden_id;
    // createPlant.date_planted = createPlant.date_planted;
    console.log('@FACTORY- createPlant: ', createPlant);

    $http.post('/data', createPlant).then(function(res) {
      newPlant.res = createPlant;

      newPlant.res.plant_id = res.data;
      var plantID = newPlant.res.plant_id;

      console.log('$*# ! @ FACTORY, plantID: ', plantID);
      console.log('!FACTORY***: ', newPlant);
      for(var i = 0; i < plantID.length; i++) {
        console.log(plantID[i]);
        plantID = plantID[i].id;
      };
      console.log('+++ ==> @FACTORY plantID after for(): ', plantID);
      newPlant.res.plant_id = plantID
      console.log('! H E R E   I S   newPlant after everything:  ', newPlant);


      $http.post('/gardenplants', newPlant).then(function(res) {
        console.log('*!! @ FACTORY, response from adding new plant to garden: ', res.data);
        getGarden(userID);
      });
    });
  };

  var getSearch = function(userSearch) {
    console.log('%% ## $$ @FACTORY, userSearch: ', userSearch);
    // $http.get('/search').then(function(res) {
    //   console.log('*** SEARCH RESULTS: ', res);
    // });
  }



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
    user: userData

  }


}]);

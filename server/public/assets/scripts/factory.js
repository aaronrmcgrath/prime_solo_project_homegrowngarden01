// FACTORY

myApp.factory('DataService', ['$http', '$window', function($http, $window) {
  var newUser = {};
  var userData = {};
  var gardensArray = [];

  var getUser = function(req) {
    $http.get('/user').then(function(res) {

      console.log('***', res.data);
        // if(res.data) {
            userData.res = res.data;
            // user.id = res.data.id;
            console.log('User: ', userData);
        // } else {
            // $window.location.href = 'assets/views/index.html';
            //$location.path = '/';
        // }
    });
  }

  // var userID = userData.res.id;

  var getGarden = function(userID) {
    $http.get('/data' + userID).then(function(res) {
      console.log('Here is the GARDEN: ', res.data);
      gardensArray = res.data;
      console.log('*! -- gardensArray!!: ', gardensArray);
    });
  };


  var postUser = function (data) {
    $http.post('/register').then(function (res) {
      newUser.data = res.data;
      console.log('Here is the newUser obj: ', newUser.data);
      return newUser.data;
    });
  };

// console.log('!!! User Log in Factory: ', userData);

  return {
    postUser: postUser,
    getUser: getUser,
    getGarden: getGarden,
    newUser: newUser,
    user: userData

  }


}]);

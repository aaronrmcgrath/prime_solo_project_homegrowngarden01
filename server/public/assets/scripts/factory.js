// FACTORY

myApp.factory('GardenService', ['$http', '$window', function($http, $window) {
  var newUser = {};
  var userData = {};

  var getUser = function(request) {
    $http.get('/user').then(function(response) {

      console.log('***', response.data);
        // if(response.data) {
            userData.response = response.data;
            // user.id = response.data.id;
            console.log('User: ', userData);
        // } else {
            // $window.location.href = 'assets/views/index.html';
            //$location.path = '/';
        // }
    });
  }

  var postUser = function (data) {
    $http.post('/register').then(function (response) {
      newUser.data = response.data;
      console.log('Here is the newUser obj: ', newUser.data);
      return newUser.data;
    });
  };

// console.log('!!! User Log in Factory: ', userData);

  return {
    postUser: postUser,
    getUser: getUser,
    newUser: newUser,
    user: userData

  }


}]);

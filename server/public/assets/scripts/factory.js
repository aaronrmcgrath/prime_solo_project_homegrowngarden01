// FACTORY

myApp.factory('UserService', ['$http', function($http) {
  var newUser = {};
  var user = {};

  var getUser = function(request) {
    $http.get('/user').then(function(response) {

      console.log(response.data);
        if(response.data) {
            user.username = response.data.username;
            console.log('User Name: ', user.userName);
            return user.username;
        } else {
            $window.location.href = '/index.html';
            //$location.path = '/';
        }
    });
  }

  var postUser = function (data) {
    $http.post('/register').then(function (response) {
      newUser.data = response.data;
      console.log('Here is the newUser obj: ', newUser.data);
      return newUser.data;
    });
  };


  return {
    postUser: postUser,
    getUser: getUser,
    newUser: newUser,
    user: user

  }


}]);

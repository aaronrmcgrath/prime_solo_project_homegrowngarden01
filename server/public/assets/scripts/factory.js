// FACTORY

myApp.factory('GardenService', ['$scope', '$http', function($scope, $http) {
  var newUser = {};
  // var user = {};

  var getUser = function(request) {
    $http.get('/user').then(function(response) {
        if(response.data) {
            $scope.userName = response.data.username;
            console.log('User Data: ', $scope.userName);
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

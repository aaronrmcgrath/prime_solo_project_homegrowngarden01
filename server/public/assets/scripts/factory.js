// FACTORY

myApp.factory('DataService', ['$http', '$window', function($http, $window) {
  // var newUser = {};
  var userData = {};
  var gardens = {};

  var getUser = function(req) {
    $http.get('/user').then(function(res) {

      // console.log('***', res.data);
        // if(res.data) {
            userData.res = res.data;
            getGarden(userData.res.id);
            // user.id = res.data.id;
            console.log('User: ', userData);
        // } else {
            // $window.location.href = 'assets/views/index.html';
            //$location.path = '/';
        // }
    });
  }

  var getGarden = function(userID) {
    $http.get('/data/' + userID).then(function(res) {
      // console.log('Here is the GARDEN: ', res.data);
      gardens.res = res.data;
      console.log('*! -- gardens!!: ', gardens);
    });
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
    gardens: gardens,
    user: userData

  }


}]);

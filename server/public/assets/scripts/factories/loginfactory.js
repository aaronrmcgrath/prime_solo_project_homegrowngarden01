// PRE-LOGIN FACTORY

homeApp.factory('SearchService', ['$http', function($http) {


  var homeSearch = '';
  var searchResults = {};

  // Search Function that submits calls to DB and sends resutls
  var getSearch = function(homeSearch) {
    console.log('%% ## $$ @FACTORY, userSearch: ', homeSearch);
    if(homeSearch.length > 0){
      $http.get('/search/' + homeSearch).then(function(res) {
        console.log('*** SEARCH RESULTS: ', res);
        searchResults.results = res.data;
        console.log('!* # # @FACTORY searchResults: ', searchResults);
      });
    };
  };

  return {
    getSearch: getSearch,
    searchResults: searchResults
  }


}]);

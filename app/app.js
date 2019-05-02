var myNinjaApp = angular.module('myNinjaApp',['ngRoute']);
// [] above are where modules belong
//How does angular know what will be controlling the application?
//A: set the ng-app eqaul to the name of the module like above
//A: looks like ng-app="myNinjaApp" (in the html file)
//all of the controllers, configs, root menus, will be contained in this module
//best practice to name the dependencies and required to include them in function call


//config method needs to be first so that the module can manage to load all dependencies first

myNinjaApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/home', {
      templateUrl: 'views/home.html',
    })
    .when('/directory', {
      templateUrl: 'views/directory.html',
      controller: 'NinjaController'
    }).otherwise({
      redirectTo: '/home'
    });
}]);

myNinjaApp.controller('NinjaController', ['$scope', '$http', function($scope, $http){

  $scope.removeNinja = function(ninja){
    var removedNinja = $scope.ninjas.indexOf(ninja);
    $scope.ninjas.splice(removedNinja, 1);
  }

  $scope.addNinja = function(){
    $scope.ninjas.push({
      name: $scope.newninja.name,
      belt: $scope.newninja.belt,
      rate: parseInt($scope.newninja.rate),
      available: true
    });

    $scope.newninja.name= "";
    $scope.newninja.belt= "";
    $scope.newninja.rate= "";

  };

  $http.get('data/ninjas.json').then(function(response){
    $scope.ninjas = response.data;
  });

//console.log(angular.toJson($scope.ninjas));

}]);

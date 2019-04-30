var myNinjaApp = angular.module('myNinjaApp',[]);
// [] above are where modules belong

//How does angular know what will be controlling the application?
//A: set the ng-app eqaul to the name of the module like above
//A: looks like ng-app="myNinjaApp" (in the html file)


//all of the controllers, configs, root menus, will be contained in this module


//best practice to name the dependencies and required to include them in function call
myNinjaApp.controller('NinjaController', ['$scope', function($scope){

  $scope.message = "Hey";

  $scope.ninjas = ['yoshi', 'crystal', 'ryu', 'shawn'];
}]);

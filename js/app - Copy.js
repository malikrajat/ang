var myApp = angular.module('myApp',[
'ngRoute',
'artistControllers'
]);

myApp.config(['$routeProvider',function($routeProvider){
	$routeProvider.
	when('/list',{
		templateUrl : 'view/list.html',
		controller : 'ListController'
	}).
	when('/detail:itemId',{
		templateUrl : 'view/details.html',
		controller : 'DetailsController'
	}).
	otherwise({
		redirectTo : 'list'
	});
}]);
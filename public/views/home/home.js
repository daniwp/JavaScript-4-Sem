angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/home/home.html',
            controller: 'HomeController'
        });
    }])

    .controller('HomeController', ['$scope', '$http', function ($scope, $http) {

    }]);

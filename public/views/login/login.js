angular.module('myApp.login', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'views/login/login.html',
            controller: 'LoginController'
        });
    }])

    .controller('LoginController', ['$scope', '$http', function ($scope, $http) {

    }]);

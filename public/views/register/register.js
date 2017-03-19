angular.module('myApp.register', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/register', {
            templateUrl: 'views/register/register.html',
            controller: 'RegisterController'
        });
    }])

    .controller('RegisterController', ['$scope', '$http', function ($scope, $http) {

    }]);

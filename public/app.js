angular.module('myApp', [
        'ngRoute',
        'ui.bootstrap',
        'myApp.home',
        'myApp.register',
        'myApp.login'
    ])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/'});
    }]);
angular.module('myApp.filters', [])

    .filter('ExampleFilter', function () {

        return function (input) {
            return input + ' example';
        };

    });
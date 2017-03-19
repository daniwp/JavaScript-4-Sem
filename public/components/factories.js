angular.module('myApp.factories', [])

    .factory('ExampleFactory', function () {
        var obj = {};

        obj.getExample = function () {
            return "Example";
        };

        return obj;
    });
angular.module('myApp.services', [])

    .service('ExampleService', [function () {

        this.getExample = function () {
            return "Example";
        };

    }]);
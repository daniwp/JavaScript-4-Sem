angular.module('myApp.directives', [])


    .directive('exampleDirectory', function () {
        return {
            restrict: 'E',
            replace: 'true',
            template: '<p>This is an example directive</p>'
        };
    });
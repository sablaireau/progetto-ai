/**
 * Created by kazuhira on 24/06/16.
 */
var iftttApp = angular.module('iftttApp', [ 'ngRoute', 'ngResource' ]);

iftttApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/home', {
        templateUrl: 'inner-pages/home.html',
        controller: 'homeController'
    });
    $routeProvider.when('/registration', {
        templateUrl: 'inner-pages/registration.html',
        controller: 'registrationController'
    });
    $routeProvider.when('/instructions', {
        templateUrl: 'inner-pages/instructions.html',
        controller: 'instructionController'
    });
    $routeProvider.when('/gCalendar', {
        templateUrl: 'inner-pages/gCalendar.html',
        controller: 'gCalendarController'
    });
    $routeProvider.when('/yWeather', {
        templateUrl: 'inner-pages/yWeather.html',
        controller: 'yWeatherController'
    });
    $routeProvider.when('/yFinance', {
        templateUrl: 'inner-pages/yFinance.html',
        controller:  'yFinanceController'
    });
    $routeProvider.when('/DropBox', {
        templateUrl: 'inner-pages/DropBox.html',
        controller:  'DropBoxController'
    });
    $routeProvider.otherwise({redirectTo: '/home'});
}]);


iftttApp.controller('homeController', ['$scope', '$rootScope', '$routeParams', '$http', '$resource',
    function ($scope, $rootscope, $routeParams, $http, $resource) {
        console.log("Home controller");
    }]);



iftttApp.controller('registrationController', ['$scope', '$rootScope', '$routeParams', '$http', '$resource',
    function ($scope, $rootscope, $routeParams, $http, $resource)
    {
            $scope.registration = {};
            $scope.registrationCheck = function(user)
            {
                $scope.registration = angular.copy(user);
                alert($scope.registration.pass1 +  user.pass1);


            }





    }]);
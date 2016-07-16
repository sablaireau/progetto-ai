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
    function ($scope, $rootscope, $routeParams, $http, $resource) {
        $scope.registration = {};
        /*
         $scope.registrationCheck = function(user)
         {
         $scope.registration = angular.copy(user);
         alert($scope.registration.pass1 +  user.pass1);

         }
         */

    }])


iftttApp.controller('yWeatherController', ['$scope', '$rootScope', '$routeParams', '$http', '$resource',
    function ($scope, $rootscope, $routeParams, $http, $resource)
    {

        var locationUser= {"_id":707860,"name":"Hurzuf","country":"UA","coord":{"lon":34.283333,"lat":44.549999}};

        $scope.WeatherPost = function(id)
        {
            $scope.idButtonx = angular.copy(id);
            alert("Ciao");

            /*
            $.ajax({
                url: "/TestServletSito",
                data: locationUser,
                dataType: "json"
                //success: alet("o.k.")
            });
            */
            //$http.post('/someUrl', data, config).then(successCallback, errorCallback);


            // Assign handlers immediately after making the request,
            // and remember the jqxhr object for this request
            var jqxhr = $.post( "/TestServletSito", function() {
                alert( "success" );
            })
                .done(function() {
                    alert( "second success" );
                })
                .fail(function() {
                    alert( "error" );
                })
                .always(function() {
                    alert( "finished" );
                });

        }


    }]);


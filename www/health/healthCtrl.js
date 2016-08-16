'use strict'
var myCitiModule1 = angular.module('myCiti.controllers');

//MOVIES
myCitiModule1.controller('HospitalCtrl', function($scope, HealthService, firebaseStorageService) {

    var hospitals = HealthService.getHospitals();
    $scope.images = {};
    hospitals.$loaded().then(function() {
        angular.forEach(hospitals, function(value, key) {
            var pathReference = firebaseStorageService.hospitals.child(value.image);
            pathReference.getDownloadURL().then(function(url) {
                $scope.$apply(function() {
                    $scope.images[value.name] = url;
                });
            });
        });
    });
    $scope.hospitals = hospitals;  


    $scope.getRandomNumber=function getRandomNumber(min, max) {
           return Math.floor(Math.random() * (max - min)) + min;
};
});

//RESTAURANT DETAILS
myCitiModule1.controller('HospitalDetailsCtrl', function($scope, $stateParams, HealthService,firebaseStorageService) {
    var movie = EntertainmentService.getMovieDetails($stateParams.movieId);
    $scope.movie = movie;

    movie.$loaded().then(function() {
        angular.forEach(movie, function(value, key) {
            //debugger;
            if(key==="image"){
            var pathReference = firebaseStorageService.movies.child(value);
            pathReference.getDownloadURL().then(function(url) {
                $scope.$apply(function() {
                    $scope.image = url;
                });
            });
            }
        });
    });


    $scope.getFormatDuration = function getFormatDuration(duration) {
        var hours = Math.floor((duration) / 60);
        var minutes = ((duration) % 60);
        if (minutes === 0)
            return hours + 'hr ';
        else
            return hours + 'hr ' + minutes + 'min';
    }

});
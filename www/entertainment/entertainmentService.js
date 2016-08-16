'use strict';
var services = angular.module('myCiti.services');

(function() {
    services.factory('EntertainmentService', entertainmentService);
    entertainmentService.$inject = ['$firebaseArray', '$firebaseObject', 'firebaseDataService'];

    function entertainmentService($firebaseArray, $firebaseObject, firebaseDataService) {

        var service = {
            getMovies: getMovies,
            getMovieDetails:getMovieDetails            
        };

        return service;

        function getMovies() {
            var movies = $firebaseArray(firebaseDataService.movies.orderByChild("is-published").startAt(true));            
            return movies;
        }

        function getMovieDetails(movieId) {
            var movie = $firebaseObject(firebaseDataService.movies.child('/'+ movieId));            
            return movie;
        }

    }
    // services.factory('MoviesService', function() {
    //     return {
    //         getMovies: function() {
    //             for (var i = 0; i < moviesData.length; i++) {
    //                 var hours = Math.floor((moviesData[i].duration) / 60);
    //                 var minutes = ((moviesData[i]).duration) % 60;
    //                 moviesData[i].duration = hours + 'hr ' + minutes + 'min';
    //             }
    //             return moviesData;
    //         }
    //     };
    // }); 
})();

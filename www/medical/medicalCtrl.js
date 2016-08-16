'use strict'
var myCitiModule1 = angular.module('myCiti.controllers');

//HOSPITALS
myCitiModule1.controller('MedicalCtrl', function($scope, $stateParams, MedicalService, firebaseStorageService) {

    $scope.pageTitle = $stateParams.subCategoryName;
    $scope.images = {};

    var hospitals = function() {
        
        var h = MedicalService.getHospitals($stateParams.subCategoryId);
 
       // debugger;
        // h.$loaded().then(function() {
        //     angular.forEach(h, function(value, key) {
        //         // var pathReference = firebaseDataService.hospitals.child(value.image);
        //         // pathReference.getDownloadURL().then(function(url) {
        //         //     $scope.$apply(function() {
        //         //         $scope.images[value.name] = url;
        //         //     });
        //         // });
        //     });
        // });
        return h;
    };
    $scope.hospitals = hospitals();
angular.forEach($scope.hospitals, function(avGenre, index){
                   console.log('av is '+ avGenre);
                });-

    function getImageUrl(image) {
            var url;
            var pathReference = firebaseDataService.hospitals.child(image);
            return pathReference.getDownloadURL().then(function(url) {
               //console.log(url);
               return url;
                // Get the download URL for 'images/stars.jpg'
                // This can be inserted into an <img> tag
                // This can also be downloaded directly
            }).catch(function(error) {
                // Handle any errors
            });         
        }
});

//HOSPITAL DETAILS
myCitiModule1.controller('MedicalDetailsCtrl', function($scope, $stateParams, MedicalService, firebaseStorageService) {
    var hospital = MedicalService.getHospitalDetails($stateParams.hospitalId);
    $scope.medical = hospital;

    hospital.$loaded().then(function() {        
        angular.forEach(hospital, function(value, key) {
            //debugger;
            console.log(key);
            if (key === "image") {
                var pathReference = firebaseStorageService.hospitals.child(value);
                pathReference.getDownloadURL().then(function(url) {
                    $scope.$apply(function() {
                        $scope.image = url;
                    });
                });
            }
        });
    });
});
'use strict'
var myCitiModule1 = angular.module('myCiti.controllers');

//businessList
myCitiModule1.controller('DefaultCtrl', function($scope, $stateParams, DefaultService, firebaseStorageService) {
    $scope.pageTitle = $stateParams.subCategoryName;
    $scope.images = {};

    var businessList = function() {
        console.log('main cat is' + $stateParams.mainCategoryName);

        var h = DefaultService.getBusinessList($stateParams.subCategoryId, $stateParams.mainCategoryName);
        return h;
    };

    $scope.businessList = businessList();
    // angular.forEach($scope.businessList, function(avGenre, index) {
    //     console.log('av is ' + avGenre);
    // });

    function getImageUrl(image) {
        var url;
        var pathReference = firebaseDataService.businessList.child(image);
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
myCitiModule1.controller('BusinessDetailsCtrl', function($scope, $stateParams, DefaultService, firebaseStorageService) {
    var business = DefaultService.getBusinessDetails($stateParams.businessId);
    $scope.business = business;

    business.$loaded().then(function() {
        angular.forEach(business, function(value, key) {
            //debugger;
            console.log(key);
            if (key === "image") {
                var pathReference = firebaseStorageService.businessList.child(value);
                pathReference.getDownloadURL().then(function(url) {
                    $scope.$apply(function() {
                        $scope.image = url;
                    });
                });
            }
        });
    });
});
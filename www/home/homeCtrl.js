'use strict';
var myCitiModule = angular.module('myCiti.controllers');

myCitiModule.controller('homeCtrl', function($scope, $cordovaDevice, $location, homeService, firebaseDataService) {
    //$scope.mainCategories = homeService.getMainCategories();       
    function internetaccess(toState) {
        if (navigator) {
            if (navigator.onLine != true) {
                onoffline = false;
                $location.url("/access/offline");
            } else {

                onoffline = true;
            }
        }
    }
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        internetaccess(toState);
    });
    window.addEventListener("offline", function(e) {
        internetaccess();
    })
    window.addEventListener("online", function(e) {
        internetaccess();
    })

    document.addEventListener("deviceready", function() {

        var device = $cordovaDevice.getDevice();
        $scope.device = device;
        var cordova = $cordovaDevice.getCordova();

        var model = $cordovaDevice.getModel();

        var platform = $cordovaDevice.getPlatform();

        var uuid = $cordovaDevice.getUUID();

        var version = $cordovaDevice.getVersion();

    }, false);


    $scope.slides = homeService.getCarauselData();
    $scope.images = {};
    $scope.getUrl = function(categoryId, categoryName) {
        if (categoryName === "events") {
            return "#/app/events";
        } else if (categoryName === "services") {
            return "#/app/serviceCategories";
        } else
            return "#/app/subCategories/" + categoryId;
    }

    $scope.getImageUrl = function(image) {
        return
    }

    var mainCategories = function() {
        var t = homeService.getMainCategories();
        t.$loaded().then(function() {
            angular.forEach(t, function(value, key) {
                var pathReference = firebaseDataService.images.child(value.image);
                pathReference.getDownloadURL().then(function(url) {
                    $scope.$apply(function() {
                        $scope.images[value.name] = url;
                    });
                });
            });
        });
        return t;
    };

    $scope.mainCategories = mainCategories();

});
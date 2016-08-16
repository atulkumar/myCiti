'use strict';
var myCitiModule1 = angular.module('myCiti.controllers');

//DINING - Restaurant's listing
myCitiModule1.controller('DiningCtrl', function($scope, $stateParams, diningService) {
    var restaurants = diningService.getData($stateParams.subCategoryId);
    //console.log('length is'+restaurants.length);
    $scope.pageTitle = $stateParams.subCategoryName;
    $scope.restaurants = restaurants;
});


//RESTAURANT DETAILS
myCitiModule1.controller('RestaurantDetailsCtrl', function($scope, $stateParams, diningService) {
    var restaurant = diningService.getRestuarentDetails($stateParams.restaurantId);
    $scope.restaurant = restaurant;
});
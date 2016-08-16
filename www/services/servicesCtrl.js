'use strict';
var myCitiModule = angular.module('myCiti.controllers');

//SERVICE - Service Categorie's Listing
myCitiModule.controller('ServiceCategoriesCtrl', function($scope, $stateParams, ServicesService) {
    var serviceCategories = ServicesService.getServiceCategories();
    $scope.serviceCategories = serviceCategories;
});

myCitiModule.controller('ServicesCtrl', function($scope, $stateParams, ServicesService) {
    var services = ServicesService.getServices($stateParams.serviceId);
    $scope.services = services;
});


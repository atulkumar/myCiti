'use strict'
var myCitiModule1 = angular.module('myCiti.controllers');

//businessList
myCitiModule1.controller('DefaultCtrl', function($scope, $stateParams, DefaultService, firebaseStorageService) {
    $scope.pageTitle = $stateParams.subCategoryName;
    $scope.images = {};
    $scope.mainCategoryName = $stateParams.mainCategoryName;
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

//BUSINESS DETAILS
myCitiModule1.controller('DefaultDetailsCtrl', function($scope, $stateParams, DefaultService, firebaseStorageService) {
    debugger;
    var business = DefaultService.getBusinessDetails($stateParams.businessId, $stateParams.subCategoryName);
    $scope.business = business;
    $scope.items = [{
        src: 'http://www.wired.com/images_blogs/rawfile/2013/11/offset_WaterHouseMarineImages_62652-2-660x440.jpg',
        sub: 'This is a <b>subtitle</b>'
    }, {
        src: 'http://www.gettyimages.co.uk/CMS/StaticContent/1391099215267_hero2.jpg',
        sub: '' /* Not showed */
    }, {
        src: 'http://www.hdwallpapersimages.com/wp-content/uploads/2014/01/Winter-Tiger-Wild-Cat-Images.jpg',
        thumb: 'http://www.gettyimages.co.uk/CMS/StaticContent/1391099215267_hero2.jpg'
    }, {
        src: 'http://assets.barcroftmedia.com.s3-website-eu-west-1.amazonaws.com/assets/images/recent-images-11.jpg',
        sub: '' /* Not showed */
    }];



    business.$loaded().then(function() {
        angular.forEach(business, function(value, key) {
            debugger;
            console.log(key);
            if (key === "image") {
                if (angular.lowercase($stateParams.subCategoryName) == "wellness")
                    var pathReference = firebaseStorageService.health.child(value);

                pathReference.getDownloadURL().then(function(url) {
                    $scope.$apply(function() {
                        $scope.image = url;
                    });
                });
            }
        });
    });
});
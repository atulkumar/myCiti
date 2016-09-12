'use strict'
var myCitiModule1 = angular.module('myCiti.controllers');

//businessList
myCitiModule1.controller('DefaultCtrl', function($scope, $stateParams, $timeout, DefaultService, firebaseStorageService) {
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

    $scope.doRefresh = function() {

        console.log('Refreshing!');
        $timeout(function() {
            //simulate async response
            businessList();

            //Stop the ion-refresher from spinning
            $scope.$broadcast('scroll.refreshComplete');

        }, 1000);

    };

});

//BUSINESS DETAILS
myCitiModule1.controller('DefaultDetailsCtrl', function($scope, $stateParams, $ionicLoading, DefaultService, MerchantService, firebaseStorageService) {

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
        thumb: 'http://www.hdwallpapersimages.com/wp-content/uploads/2014/01/Winter-Tiger-Wild-Cat-Images.jpg'
    }];
    $scope.photos = new Array();
    var merchant = MerchantService.getMerchantDetails(1);
    $scope.merchant = merchant;

    business.$loaded().then(function() {
        angular.forEach(business, function(value, key) {

            if (key === "cards") {

                angular.forEach(value, function(value1, key1) {

                    angular.forEach(value1, function(value2, key2) {

                        console.log(key2 + '-' + value2);
                        if (key2 == "images") {
                            value2.forEach(function(photo) {
                                var pathReference = firebaseStorageService.health.child(photo);

                                pathReference.getDownloadURL().then(function(url) {
                                    $scope.$apply(function() {
                                        console.log('pushed');
                                        $scope.photos.push(url);
                                    });
                                });
                            }, value2);

                        }
                    });
                });
            }
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

    function initialize() {
        try {
            var myLatlng = new google.maps.LatLng(30.704261, 76.691823);
            var mapOptions = {
                center: myLatlng,
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title: 'Business Name'
            });
            $scope.map = map;
        } catch (error) {
            alert('error');
        }

    }

    google.maps.event.addDomListener(window, 'load', initialize);

});
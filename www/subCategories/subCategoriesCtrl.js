'use strict';
var myCitiModule1 = angular.module('myCiti.controllers');
var services = angular.module('myCiti.services');
//DINING - Restaurant's listing
myCitiModule1.controller('subCategoriesCtrl', function($scope, $stateParams, homeService, subCategoriesService, firebaseDataService) {
    var mainCategory = homeService.getMainCategoryDetails($stateParams.categoryId);
    // var subCategories = subCategoriesService.getSubCategories($stateParams.categoryId);

    $scope.images = {};
    //$scope.images["1"] ="https://firebasestorage.googleapis.com/v0/b/resplendent-heat-2623.appspot.com/o/mainCategories%2Fnew-york-dining.jpg?alt=media&token=51798b0b-3ecb-426b-98e3-d505f9dd342e";

    var subCategories = function() {
        var t = subCategoriesService.getSubCategories($stateParams.categoryId);
        t.$loaded().then(function() {
            angular.forEach(t, function(value, key) {
                console.log(key, value);
                console.log(value.image);
                var pathReference = firebaseDataService.images.child(value.image);
                pathReference.getDownloadURL().then(function(url) {
                    $scope.$apply(function() {
                        $scope.images[value.name] = url;

                    });
                });

            });
            // subCategories.forEach(function(subCategory){
            //     console.log(subCategory.name);
            //     var pathReference = firebaseDataService.images.child(subCategory.image);
            //     pathReference.getDownloadURL().then(function(url) {
            // //Service.getImageUrl(category.val().image).then(function(url) {  
            //      $scope.images[subCategory.key] = url;
            //     console.log('----------' + url);
            //         }); 
            //     });
            //return t;

        });

        return t;
    };




    $scope.mainCategory = mainCategory;
    $scope.subCategories = subCategories();

    $scope.getUrl = function(subCategoryId, subCategoryName) {
            debugger;
            if ($scope.mainCategory.name == "Dining") {
                //alert('dining');
                return "#/app/dining/" + subCategoryId + "/" + subCategoryName;
            }
            if ($scope.mainCategory.name == "Medical") {
                //alert('dining');
                return "#/app/medical/" + subCategoryId + "/" + subCategoryName;
            }
            if ($scope.mainCategory.name == "Automobile") {
                return "#/app/default/" + $scope.mainCategory.name + "/" + subCategoryId + "/" + subCategoryName;;
            }

            if ($scope.mainCategory.name == "Beauty") {
                return "#/app/default/" + $scope.mainCategory.name + "/" + subCategoryId + "/" + subCategoryName;;
            }
            if ($scope.mainCategory.name == "Wellness") {
                return "#/app/default/" + $scope.mainCategory.name + "/" + subCategoryId + "/" + subCategoryName;;
            }

            if (subCategoryName == "movies") {
                return "#/app/movies";
            }
        }
        //  var storageRefProfilePic = '';
        //$scope.getImageUrl = function() {
        //return 'https://firebasestorage.googleapis.com/v0/b/resplendent-heat-2623.appspot.com/o/mainCategories%2Fnew-york-dining.jpg?alt=media&token=51798b0b-3ecb-426b-98e3-d505f9dd342e';
        // var image ='new-york-dining.jpg';
        // debugger;
        // var t;
        // var imageUrl = subCategoriesService.getImageUrl(image).then(function(url) {  
        //       storageRefProfilePic = url;
        //       console.log(url);          
        //     // t = response;
        //     // console.log('url is ' +t);
        //     // return t;
        // });
        //  return t;
        //}

    // $scope.images={};
    // $scope.getImageUrl=function(image) {
    //         var url;
    //         var pathReference = firebaseDataService.images.child(image);
    //         pathReference.getDownloadURL().then(function(url) {
    //            console.log('url is ' + url);
    //               storageRefProfilePic = url;
    //                $scope.images[1] = url;
    //         return url;
    //             // Get the download URL for 'images/stars.jpg'
    //             // This can be inserted into an <img> tag
    //             // This can also be downloaded directly
    //         }).catch(function(error) {
    //             // Handle any errors
    //         });        
    //         return url; 
    //     }
    //         var g=getImageUrl('new-york-dining.jpg');
    // $scope.profilepic = storageRefProfilePic;
});



// $scope.getImageUrl = function(image) {
//     var imageUrl;
//         var imageUrl = subCategoriesService.getImageUrl(image).then(function(url) {  
//               imageUrl = url;
//               return imageUrl;
//         });
//        return imageUrl;
//     }
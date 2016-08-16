'use strict';
var myCitiModule = angular.module('myCiti.controllers', ['myCiti.services']);

//WALKTHROUGH
myCitiModule.controller('WalkthroughCtrl', function($scope, $state, $ionicSlideBoxDelegate) {
    $scope.$on('$ionicView.enter', function() {
        //this is to fix ng-repeat slider width:0px;
        $ionicSlideBoxDelegate.$getByHandle('walkthrough-slider').update();
    });
});
myCitiModule.controller('AppCtrl', function($scope, $ionicModal, $timeout) {});

//HOME
myCitiModule.controller('HomeCtrl', function($scope, $state, $ionicSlideBoxDelegate, CategoryService, CarouselService) {
    //Top Slide Box
    $scope.slides = CarouselService.getHomePageCarouselData();
    $scope.myActiveSlide = 0;

    //Listing of Categories    
    $scope.mainCategories = CategoryService.getMainCategories();
    $scope.getUrl = function(categoryName, categoryTitle) {
        if (categoryName === "events") {
            return "#/app/events";
        }
        else  if (categoryName === "services") {
            return "#/app/serviceCategories";
        }      
         else
            return "#/app/subCategories/" + categoryName + "/" + categoryTitle;
    }
});

//SETTINGS
myCitiModule.controller('SettingsCtrl', function($scope, $ionicActionSheet, $ionicModal, $state) {
    $scope.notifications = true;
    $scope.sendLocation = false;

    $ionicModal.fromTemplateUrl('views/misc/terms.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.terms_modal = modal;
    });

    $ionicModal.fromTemplateUrl('views/misc/faqs.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.faqs_modal = modal;
    });

    $scope.showTerms = function() {
        $scope.terms_modal.show();
    };

    $scope.showFAQS = function() {
        $scope.faqs_modal.show();
    };
});

//SUB CATEGORIES
myCitiModule.controller('SubCategoriesCtrl', function($scope, $state, $ionicSlideBoxDelegate, $stateParams, SubCategoryService) {
    var mainCategoryName = $stateParams.categoryName;
    var mainCategoryTitle = $stateParams.categoryTitle

    var subCategories = SubCategoryService.getSubCategories(mainCategoryName);
    $scope.subCategories = subCategories;
    $scope.pageTitle = mainCategoryTitle;

    //Top Slide Box
    $scope.slides = SubCategoryService.getCarouselData($stateParams.categoryName);
    $scope.myActiveSlide = 0;

    $scope.getUrl = function(categoryName, subCategoryName) {
        if (categoryName === "entertainment" && subCategoryName === "movies") {
            return "#/app/movies";
        }
        if (categoryName === "dining") {
            return "#/app/dining/" + subCategoryName;
        }
    }
});

//MOVIES
myCitiModule.controller('MoviesCtrl', function($scope, MoviesService) {
    var movies = MoviesService.getMovies();
    $scope.movies = movies;
});



//OFFERS
myCitiModule.controller('OffersCtrl', function($scope, $stateParams, OffersService) {
    var offers = OffersService.getOffers();
    $scope.offers = offers;
});

//OFFER DETAILS
myCitiModule.controller('OfferDetailsCtrl', function($scope, $stateParams, OffersService) {
    var getOfferDetails = function(offerId) {
        return OffersService.getOfferDetails(offerId);
    };
    $scope.offer = getOfferDetails($stateParams.offerId);
});

//DIRECTORY
myCitiModule.controller('DirectoryCtrl', function($scope) {
    $scope.shops = [{
        name: 'shop1',
        floor: 'f1',
        id: 1
    }, {
        name: 'shop2',
        floor: 'f2',
        id: 2
    }, {
        name: 'shop3',
        floor: 'f3',
        id: 2
    }, {
        name: 'shop4',
        floor: 'f1',
        id: 1
    }, {
        name: 'shop5',
        floor: 'f1',
        id: 2
    }, {
        name: 'shop6',
        floor: 'f4',
        id: 2
    }, ];
});



//EMAIL SENDER
// myCitiModule.controller('EmailSenderCtrl', function($scope, $cordovaEmailComposer) {
//   $scope.sendFeedback = function(){    
//     cordova.plugins.email.isAvailable(
//       function (isAvailable) {
//         // alert('Service is not available') unless isAvailable;
//         cordova.plugins.email.open({
//           to:      'john@doe.com',
//           cc:      'jane@doe.com',
//           subject: 'Feedback',
//           body:    'This app is awesome'
//         });
//       }
//     );
//   }

// $scope.sendContactMail = function(){
//   alert('email');
//   //Plugin documentation here: http://ngcordova.com/docs/plugins/emailComposer/
//   $cordovaEmailComposer.isAvailable().then(function() {
//     // is available
//       $cordovaEmailComposer.open({
//         to: 'john@doe.com',
//         cc: 'sally@doe.com',
//         subject: 'Contact from ionWordpress',
//         body: 'How are you? Nice greetings from Uruguay'
//       })
//       .then(null, function () {
//         // user cancelled email
//       });
//   }, function () {
//     // not available
//   });
// };
//});


// RATE THIS APP
// myCitiModule.controller('RateAppCtrl', function($scope) {
//   $scope.rateApp = function(){
//     if(ionic.Platform.isIOS()){
//       AppRate.preferences.storeAppURL.ios = '<my_app_id>';
//       AppRate.promptForRating(true);
//     }else if(ionic.Platform.isAndroid()){
//       AppRate.preferences.storeAppURL.android = 'market://details?id=<package_name>';
//       AppRate.promptForRating(true);
//     }
//   };
// });
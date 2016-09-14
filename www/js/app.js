angular.module('underscore', [])
    .factory('_', function() {
        return window._; // assumes underscore has already been loaded on the page
    });

//    angular.module('myCiti', []).config(function($sceDelegateProvider) {  
//        $sceDelegateProvider.resourceUrlWhitelist(['self', new RegExp('^(http[s]?):\/\/(w{3}.)?youtube\.com/.+$')]);
//   // The blacklist overrides the whitelist so the open redirect here is blocked.
//         $sceDelegateProvider.resourceUrlBlacklist(['http://myapp.example.com/clickThru**']);
// });

angular.module('myCiti', ['ionic', 'ion-gallery', 'myCiti.controllers',
        //'myCiti.directives',  
        //'myCiti.views',
        'myCiti.services',
        //'myCiti.config',
        //'myCiti.factories',
        //'myCiti.filters',
        //'ngMap',
        //'angularMoment',
        'underscore',
        'firebase',        
        'ch.filters', 'ngCordova','uiGmapgoogle-maps'
    ])
    .run(function($ionicPlatform, $rootScope, $state) {
        $ionicPlatform.on("deviceready", function() {

            // AuthService.userIsLoggedIn().then(function(response)
            // {
            //   if(response === true)
            //   {
            //     //update user avatar and go on
            //     //AuthService.updateUserAvatar();
            //     $state.go('app.home');
            //   }
            //   else
            //   {
            //     $state.go('walkthrough');
            //   }
            // });

            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }

            //PushNotificationsService.register();
        })
    })
    .config(function($stateProvider, $urlRouterProvider, $sceDelegateProvider,uiGmapGoogleMapApiProvider) {
        $sceDelegateProvider.resourceUrlWhitelist(['self', 'https://firebasestorage.googleapis.com/v0/b/resplendent-heat-2623.appspot.com**', new RegExp('^(http[s]?):\/\/(w{3}.)?youtube\.com/.+$')]);
        // // The blacklist overrides the whitelist so the open redirect here is blocked.
        $sceDelegateProvider.resourceUrlBlacklist(['http://myapp.example.com/clickThru**']);
        
        uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyBP_UmN-ucFZBxZg8l1CK-6riOMz0_atvE',
        libraries: '',
        v: '3.17'
        });

        $stateProvider
            .state('walkthrough', {
                url: "/",
                templateUrl: "views/auth/walkthrough.html",
                controller: 'WalkthroughCtrl',
                data: {
                    authenticate: false
                }
            })
            .state('intro', {
                url: "/intro",
                templateUrl: "intro/intro.html",
                controller: 'introCtrl',
                data: {
                    authenticate: false
                }
            })
            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "views/app/side-menu.html",
                controller: 'AppCtrl'
            })

        //HOME
        .state('app.home', {
                url: '/home',
                views: {
                    'menuContent': {
                        templateUrl: 'home/home.html',
                        controller: 'homeCtrl'
                    }
                }
            })
            //SUB CATEGORIES
            .state('app.subCategories', {
                url: '/subCategories/:categoryId',
                views: {
                    'menuContent': {
                        templateUrl: 'subCategories/subCategories.html',
                        controller: 'subCategoriesCtrl'
                    }
                }
            })
            // .state('app.subCategories', {
            //     url: '/subCategories/:categoryName/:categoryTitle',
            //     views: {
            //         'menuContent': {
            //             templateUrl: 'views/app/subCategories.html',
            //             controller: 'SubCategoriesCtrl'
            //         }
            //     }
            // })
            //DIRECTORY
            .state('app.directory', {
                url: '/directory',
                views: {
                    'menuContent': {
                        templateUrl: 'views/app/directory.html',
                        controller: 'DirectoryCtrl'
                    }
                }
            })
            //MOVIES
            .state('app.movies', {
                url: '/movies',
                views: {
                    'menuContent': {
                        templateUrl: 'entertainment/movies.html',
                        controller: 'EntertainmentCtrl'
                    }
                }
            })
            //MOVIE DETAILS
            .state('app.movieDetails', {
                url: '/movieDetails/:movieId',
                views: {
                    'menuContent': {
                        templateUrl: 'entertainment/movieDetails.html',
                        controller: 'MovieDetailsCtrl'
                    }
                }
            })
            //DINING
            .state('app.dining', {
                url: '/dining/:subCategoryId/:subCategoryName',
                views: {
                    'menuContent': {
                        templateUrl: 'dining/dining.html',
                        controller: 'DiningCtrl'
                    }
                }
            })
            //REST DETAILS
            .state('app.restaurantDetails', {
                url: '/restaurantDetails/:restaurantId',
                views: {
                    'menuContent': {
                        templateUrl: 'dining/restaurantDetails.html',
                        controller: 'RestaurantDetailsCtrl'
                    }
                }
            })
            //MEDICAL
            .state('app.medical', {
                url: '/medical/:subCategoryId/:subCategoryName',
                views: {
                    'menuContent': {
                        templateUrl: 'medical/medicalListing.html',
                        controller: 'MedicalCtrl'
                    }
                }
            })
            //MEDICAL DETAILS
            .state('app.medicalDetails', {
                url: '/medicalDetails/:hospitalId',
                views: {
                    'menuContent': {
                        templateUrl: 'medical/medicalDetails.html',
                        controller: 'MedicalDetailsCtrl'
                    }
                }
            })

        //EVENTS
        .state('app.events', {
                url: '/events',
                views: {
                    'menuContent': {
                        templateUrl: 'events/events.html',
                        controller: 'EventsCtrl'
                    }
                }
            })
            //EVENT DETAILS
            .state('app.eventDetails', {
                url: '/eventDetails/:eventId',
                views: {
                    'menuContent': {
                        templateUrl: 'events/eventDetails.html',
                        controller: 'EventDetailsCtrl'
                    }
                }
            })
            //SERVICE CATEGORIES
            .state('app.serviceCategories', {
                url: '/serviceCategories',
                views: {
                    'menuContent': {
                        templateUrl: 'services/serviceCategories.html',
                        controller: 'ServiceCategoriesCtrl'
                    }
                }
            })
            //SERVICES LISTING
            .state('app.services', {
                url: '/services/:serviceId',
                views: {
                    'menuContent': {
                        templateUrl: 'services/services.html',
                        controller: 'ServicesCtrl'
                    }
                }
            })

        //AUTOMOBILE
        .state('app.default', {
                url: '/default/:mainCategoryName/:subCategoryId/:subCategoryName',
                views: {
                    'menuContent': {
                        templateUrl: 'default/defaultListing.html',
                        controller: 'DefaultCtrl'
                    }
                }
            })
            //AUTOMOBILE DETAILS
            .state('app.defaultDetails', {
                url: '/defaultDetails/:subCategoryName/:businessId',
                views: {
                    'menuContent': {
                        templateUrl: 'default/defaultDetails.html',
                        controller: 'DefaultDetailsCtrl'
                    }
                }
            })

        .state('login', {
            url: '/login',
            templateUrl: 'views/auth/login.html',
            controller: 'LoginCtrl'
        })

        //MISCELLANEOUS
        .state('app.contact', {
                url: "/contact",
                views: {
                    'menuContent': {
                        templateUrl: "views/misc/contact.html"
                    }
                }
            })
            //SETTINGS
            .state('app.settings', {
                url: "/settings",
                views: {
                    'menuContent': {
                        templateUrl: "views/app/settings.html",
                        controller: 'SettingsCtrl'
                    }
                },
                data: {
                    authenticate: false
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/intro');
    });
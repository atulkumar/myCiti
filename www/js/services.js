'use strict';
var services = angular.module('myCiti.services', []);



var eventsData = [{
    eventId: 1,
    eventName: 'Training 1',
    eventDesc: 'Training 1 Desc here',
    fromDate: '11/01/2016',
    toDate: '13/01/2016',
    mainImage: '\\img\\dynamic\\shopping.jpg',
    images: ['\\img\\dynamic\\shopping.jpg', '\\img\\dynamic\\kids.jpg', 'img\\dynamic\\shopping.jpg']
}, {
    eventId: 2,
    eventName: 'Training 2',
    eventDesc: 'Training 2 Desc here',
    fromDate: '11/01/2016',
    toDate: '13/01/2016',
    mainImage: '\\img\\dynamic\\shopping.jpg',
    images: ['\\img\\dynamic\\shopping.jpg', '\\img\\dynamic\\kids.jpg', 'img\\dynamic\\shopping.jpg']
}];

var offersData = [{
    offerId: 1,
    offerName: 'Offer on Pizza hut'
}, {
    offerId: 2,
    offerName: '50% off Offer'
}];

// var mainCategoriesData = [{
//     id: 0,
//     name: 'shopping',
//     title: 'Shopping',
//     image: '\\img\\dynamic\\shopping.jpg'
// }, {
//     id: 1,
//     name: 'dining',
//     title: 'Dining',
//     image: '\\img\\dynamic\\shopping.jpg'
// }, {
//     id: 2,
//     name: 'entertainment',
//     title: 'Entertainment',
//     image: '\\img\\dynamic\\shopping.jpg'
// }, {
//     id: 3,
//     name: 'events',
//     title: 'Events',
//     image: '\\img\\dynamic\\shopping.jpg'
// }, {
//     id: 4,
//     name: 'services',
//     title: 'Services',
//     image: '\\img\\dynamic\\shopping.jpg'
// }, {
//     id: 5,
//     name: 'allStores',
//     title: 'All Stores',
//     image: '\\img\\dynamic\\shopping.jpg'
// }];
var subCategories = [{
    category: 'shopping',
    id: 0,
    name: 'menWear',
    title: 'Men\'s Style',
    image: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
}, {
    category: 'shopping',
    id: 1,
    name: 'womenWear',
    title: 'Women wear',
    image: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
}, {
    category: 'shopping',
    id: 12,
    name: 'kids',
    title: 'Kidz Collection',
    image: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
}, {
    category: 'shopping',
    id: 43,
    name: 'toys',
    title: 'Toys',
    image: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
}, {
    category: 'shopping',
    id: 121,
    name: 'electronics',
    title: 'Electronics',
    image: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
}, {
    category: 'shopping',
    id: 432,
    name: 'homeDecor',
    title: 'Home Decoration',
    image: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
}, {
    category: 'grocery',
    id: 433,
    name: 'superMarket',
    title: 'Super Market',
    image: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
}, {
    category: 'entertainment',
    id: 2,
    name: 'movies',
    title: 'Movies',
    image: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
}, {
    category: 'entertainment',
    id: 3,
    name: 'kidsZone',
    title: 'Kidz Zone',
    image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
}, {
    category: 'entertainment',
    id: 4,
    name: '7DCinema',
    title: '7 D cinema',
    image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
}, {
    category: 'dining',
    id: 5,
    name: 'breakFast',
    title: 'BreakFast',
    image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
}, {
    category: 'dining',
    id: 6,
    name: 'fastFood',
    title: 'Fast Food',
    image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
}, {
    category: 'dining',
    id: 7,
    name: 'bakery',
    title: 'Bakery',
    image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
}, {
    category: 'dining',
    id: 8,
    name: 'cafe',
    title: 'Cafe',
    image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
}, {
    category: 'dining',
    id: 9,
    name: 'fineDining',
    title: 'Fine Dining',
    image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
}, {
    category: 'dining',
    id: 10,
    name: 'bar',
    title: 'Bar',
    image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
}, {
    category: 'dining',
    id: 11,
    name: 'buffet',
    title: 'Buffet',
    image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
}];
var carouselDataFromService = [{
    id: 1,
    mainCategory: 'dining',
    title: 'Slide1',
    imageUrl: '\\img\\dynamic\\candies.jpg'
}, {
    id: 2,
    mainCategory: 'shopping',
    title: 'Slide2',
    imageUrl: '\\img\\dynamic\\fashion.jpg'
}, {
    id: 3,
    mainCategory: 'shopping',
    title: 'Slide3',
    imageUrl: '\\img\\dynamic\\fashion-1.jpg'
}, {
    id: 4,
    mainCategory: 'shopping',
    title: 'Slide4',
    imageUrl: '\\img\\dynamic\\kids.jpg'
}];

var carouselData = [{
    id: 1,
    mainCategory: 'Shopping',
    title: 'Slide1',
    imageUrl: '\\img\\dynamic\\candies.jpg'
}, {
    id: 2,
    mainCategory: 'Shopping',
    title: 'Slide2',
    imageUrl: '\\img\\dynamic\\shopping.jpg'
}, {
    id: 3,
    mainCategory: 'Shopping',
    title: 'Slide3',
    imageUrl: '\\img\\dynamic\\fashion-1.jpg'
}, {
    id: 4,
    mainCategory: 'Shopping',
    title: 'Slide4',
    imageUrl: '\\img\\dynamic\\kids.jpg'
}];


services.factory('CategoryService', function() {
    return {
        getMainCategories: function() {
            return mainCategoriesData;
        }
    }
})

services.factory('SubCategoryService', function() {
    var getSubCategories = function(mainCategory) {
        var subcategoriesData = [];
        for (var i = 0; i < subCategories.length; i++) {
            if (subCategories[i].category == mainCategory) {
                subcategoriesData.push(subCategories[i]);
            }
        }
        return subcategoriesData;
    };

    var getCarouselData = function(mainCategory) {
        var carouselData = [];
        for (var i = 0; i < carouselDataFromService.length; i++) {
            if (carouselDataFromService[i].mainCategory === mainCategory) {
                carouselData.push(carouselDataFromService[i]);
            }
        }
        return carouselData;
    };

    return {
        getSubCategories: getSubCategories,
        getCarouselData: getCarouselData
    }
})

services.factory('CarouselService', function() {
    return {
        getHomePageCarouselData: function() {
            return carouselData;
        }
    };
})




/*
services.factory('EventsService',['$firebaseArray',function ($firebaseArray) {   
    var getEvents = function () {
        var root = 'https://resplendent-heat-2623.firebaseio.com/';
    var utils = {
  urls: {
    root: root,
    categories: root + 'categories',
    events:root + 'categories' + '/' + 'events' 
  }
};
var ref= new Firebase(utils.urls.events + '/'); 
  ref.on('value',function(snap){
  	console.log(snap.val());        
	}); 
       return $firebaseArray(ref);   
        //return eventsData;
    };

    var getEvent = function (eventId) {
        for (var i = 0; i < eventsData.length; i++) {
            if (eventsData[i].eventId == eventId) {
                return eventsData[i];
            }
        }
    };

    return {
        getEvents: getEvents,
        getEventDetails: getEvent
    };

}])
*/
services.factory('OffersService', function() {
    var getOffers = function() {
        return offersData;
    };


    var getOffer = function(offerId) {
        for (var i = 0; i < offersData.length; i++) {
            if (offersData[i].offerId == offerId) {
                return offersData[i];
            }
        }
    };

    return {
        getOffers: getOffers,
        getOfferDetails: getOffer
    };
})

// // WP AUTHENTICATION RELATED FUNCTIONS
// .service('AuthService', function ($rootScope, $http, $q, WORDPRESS_API_URL){
// 
//   this.validateAuth = function(user) {
//     var deferred = $q.defer();
//     $http.jsonp(WORDPRESS_API_URL + 'user/validate_auth_cookie/' +
//     '?cookie='+ user.cookie +
//     '&callback=JSON_CALLBACK')
//     .success(function(data) {
//       deferred.resolve(data);
//     })
//     .error(function(data) {
//       deferred.reject(data);
//     });
//     return deferred.promise;
//   };
// 
//   this.doLogin = function(user) {
//     var deferred = $q.defer(),
//         nonce_dfd = $q.defer(),
//         authService = this;
// 
//     authService.requestNonce("user", "generate_auth_cookie")
//     .then(function(nonce){
//       nonce_dfd.resolve(nonce);
//     });
// 
//     nonce_dfd.promise.then(function(nonce){
//       //now that we have the nonce, ask for the new cookie
//       authService.generateAuthCookie(user.userName, user.password, nonce)
//       .then(function(data){
//         if(data.status == "error"){
//           // return error message
//           deferred.reject(data.error);
//         }else{
//           //recieve and store the user's cookie in the local storage
//           var user = {
//             cookie: data.cookie,
//             data: data.user,
//             user_id: data.user.id
//           };
// 
//           authService.saveUser(user);
// 
//           //getavatar in full size
//           authService.updateUserAvatar().then(function(){
//             deferred.resolve(user);
//           });
//         }
//       });
//     });
//     return deferred.promise;
//   };
// 
//   this.doRegister = function(user) {
//     var deferred = $q.defer(),
//         nonce_dfd = $q.defer(),
//         authService = this;
// 
//     authService.requestNonce("user", "register")
//     .then(function(nonce){
//       nonce_dfd.resolve(nonce);
//     });
// 
//     nonce_dfd.promise.then(function(nonce){
//       authService.registerUser(user.userName, user.email,
//         user.displayName, user.password, nonce)
//       .then(function(data){
//         if(data.status == "error"){
//           // return error message
//           deferred.reject(data.error);
//         }else{
//           // in order to get all user data we need to call this function
//           // because the register does not provide user data
//           authService.doLogin(user).then(function(){
//             deferred.resolve(user);
//           });
//         }
//       });
//     });
// 
//     return deferred.promise;
//   };
// 
//   this.requestNonce = function(controller, method) {
//     var deferred = $q.defer();
//     $http.jsonp(WORDPRESS_API_URL + 'get_nonce/' +
//     '?controller=' + controller +
//     '&method=' + method +
//     '&callback=JSON_CALLBACK')
//     .success(function(data) {
//       deferred.resolve(data.nonce);
//     })
//     .error(function(data) {
//       deferred.reject(data.nonce);
//     });
//     return deferred.promise;
//   };
// 
//   this.doForgotPassword = function(username) {
//     var deferred = $q.defer();
//     $http.jsonp(WORDPRESS_API_URL + 'user/retrieve_password/' +
//     '?user_login='+ username +
//     '&callback=JSON_CALLBACK')
//     .success(function(data) {
//       deferred.resolve(data);
//     })
//     .error(function(data) {
//       deferred.reject(data);
//     });
//     return deferred.promise;
//   };
// 
//   this.generateAuthCookie = function(username, password, nonce) {
//     var deferred = $q.defer();
//     $http.jsonp(WORDPRESS_API_URL + 'user/generate_auth_cookie/' +
//     '?username='+ username +
//     '&password=' + password +
//     '&nonce='+ nonce +
//     '&callback=JSON_CALLBACK')
//     .success(function(data) {
//       deferred.resolve(data);
//     })
//     .error(function(data) {
//       deferred.reject(data);
//     });
//     return deferred.promise;
//   };
// 
//   this.saveUser = function(user){
//     window.localStorage.ionWordpress_user = JSON.stringify(user);
//   };
// 
//   this.getUser = function(){
// 
//     var data = (window.localStorage.ionWordpress_user) ? JSON.parse(window.localStorage.ionWordpress_user).data : null,
//         cookie = (window.localStorage.ionWordpress_user) ? JSON.parse(window.localStorage.ionWordpress_user).cookie : null;
// 
//     return {
//       avatar : JSON.parse(window.localStorage.ionWordpress_user_avatar || null),
//       data: data,
//       cookie: cookie
//     };
//   };
// 
//   this.registerUser = function(username, email, displayName, password, nonce) {
//     var deferred = $q.defer();
//     $http.jsonp(WORDPRESS_API_URL + 'user/register/' +
//     '?username='+ username +
//     '&email=' + email +
//     '&display_name='+ displayName +
//     '&user_pass=' + password +
//     '&nonce='+ nonce +
//     '&callback=JSON_CALLBACK')
//     .success(function(data) {
//       deferred.resolve(data);
//     })
//     .error(function(data) {
//       deferred.reject(data);
//     });
//     return deferred.promise;
//   };
// 
//   this.userIsLoggedIn = function(){
//     var deferred = $q.defer();
// 
//     var user = JSON.parse(window.localStorage.ionWordpress_user || null);
//     if(user !== null && user.cookie !== null)
//     {
//       this.validateAuth(user).then(function(data){
//         deferred.resolve(data.valid);
//       });
//     }
//     else
//     {
//       deferred.resolve(false);
//     }
//     return deferred.promise;
//   };
// 
//   this.logOut = function(){
//     //empty user data
// 
//     window.localStorage.ionWordpress_user = null;
//     window.localStorage.ionWordpress_user_avatar = null;
//     // window.localStorage.ionWordpress_bookmarks = null;
//   };
// 
//   //update user avatar from WP
//   this.updateUserAvatar = function() {
//     var avatar_dfd = $q.defer(),
//         authService = this,
//         user = JSON.parse(window.localStorage.ionWordpress_user || null);
// 
//     $http.jsonp(WORDPRESS_API_URL + 'user/get_avatar/' +
//     '?user_id='+ user.user_id +
//     '&type=full' +
//     '&callback=JSON_CALLBACK')
//     .success(function(data) {
// 
//       var avatar_aux = data.avatar.replace("http:", "");
//       var avatar = 'http:' + avatar_aux;
// 
//       window.localStorage.ionWordpress_user_avatar =  JSON.stringify(avatar);
// 
//       avatar_dfd.resolve(avatar);
//     })
//     .error(function(err) {
//       avatar_dfd.reject(err);
//     });
// 
//     return avatar_dfd.promise;
//   };
// });
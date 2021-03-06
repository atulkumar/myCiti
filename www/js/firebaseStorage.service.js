//This method can be written in two ways i.e. commented one and non-commented
// (function() {
//   'use strict';
// 
//   angular
//     .module('myCiti')
//     .factory('firebaseDataService', firebaseDataService);
// 
//   firebaseDataService.$inject = ['FIREBASE_URL'];
// 
//   function firebaseDataService(FIREBASE_URL) {
//     var root = new Firebase(FIREBASE_URL);
//     console.log(FIREBASE_URL)
//     var service = {
//       root: root,
//       categories: root.child('categories'),
//       events: root.child('categories/events')  
//     };
//     return service;
//   }
// })();

// angular.module('myCiti').factory('firebaseDataService', ['FIREBASE_URL', function firebaseDataService(firebase_url) {
//     //var root = new Firebase(firebase_url);
//             var root=firebase.database().ref();
//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyCpObJcPFHw5yhzlGq-pf__EfKKJ4-Un08",
//     authDomain: "resplendent-heat-2623.firebaseapp.com",
//     databaseURL: "https://resplendent-heat-2623.firebaseio.com",
//     storageBucket: "resplendent-heat-2623.appspot.com",
//   };
//   firebase.initializeApp(config);
// var commentsRef = firebase.database().ref('post-comments/' + postId);



// console.clear();


//     var service = {
//         root: root,
//         categories: root.child('categories'),
//         events: root.child('categories/events'),     
//         movies:root.child('entertainment/movies'),
//         services:root.child('categories/services'),
//         mainCategories:root.child('mainCategories'),
//         subCategories:root.child('mainCategories'),
//         dining:root.child('dining'),
//         dining_mapping:root.child('dining_mapping'),
//     };
//     return service;
// }]);


(function() {
    'use strict';

    angular
        .module('myCiti')
        .factory('firebaseStorageService', firebaseStorageService);

    function firebaseStorageService() {
        var storage = firebase.storage().ref();

        var service = {
            images: storage.child('mainCategories'),
            movies: storage.child('Entertainment/Movies'),
            hospitals: storage.child('Medical'),
            health: storage.child('Health')

        };
        return service;
    }
})();
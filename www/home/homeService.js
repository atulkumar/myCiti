'use strict';
var services = angular.module('myCiti.services');

(function(){
services.factory('homeService',homeService);
homeService.$inject=['$firebaseArray', '$firebaseObject', 'firebaseDataService'];

function homeService($firebaseArray,$firebaseObject,firebaseDataService){    
var service={
        getMainCategories:getMainCategories,  
    getCarauselData:getCarauselData,
    getMainCategoryDetails:getMainCategoryDetails
};
return  service;

 function getMainCategories() {
            var mainCategories = $firebaseArray(firebaseDataService.mainCategories.orderByChild("isActive").startAt(true));            
            return mainCategories;
        };

  function getMainCategoryDetails(mainCategoryId) {
      try {
                var res = $firebaseObject(firebaseDataService.mainCategories.child(mainCategoryId));
                
                // to take an action after the data loads, use the $loaded() promise
                // res.$loaded().then(function() {
                //     console.log("loaded record:", res.$id, res.name);                   
                //     console.log(res);
                //     // To iterate the key/value pairs of the object, use angular.forEach()
                //     angular.forEach(res, function(value, key) {                                                
                //         console.log(key, value);
                //     });
                // });                
                return res;
            } catch (error) {
                
  }};
}

  
function getCarauselData(){
   return carouselData;
}
})();

// (function(){
//    services.factory('homeService', function() {
//     return {
//         getMainCategories: function() {            
//             return mainCategoriesData;                           
//         }
//     };
// }); 
// })();

var carouselData = [{
    id: 1,
    mainCategory: 'Shopping',
    title: 'Slide1',
    imageUrl: 'candies.jpg'
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

'use strict';
var services = angular.module('myCiti.services');

(function() {
    services.factory('subCategoriesService', subCategoriesService);
    subCategoriesService.$inject = ['$firebaseArray', '$firebaseObject', 'firebaseDataService'];

    function subCategoriesService($firebaseArray, $firebaseObject, firebaseDataService) {

        var service = {
            getSubCategories: getSubCategories,
            getImageUrl: getImageUrl
        };

        return service;

        function getSubCategories(categoryId) {
            if (categoryId === null || categoryId === 0)
                categoryId = 1;

            var subCategories = $firebaseArray(firebaseDataService.mainCategories.child('/' + categoryId + '/subCategories').orderByChild("is-active").startAt(true));
            // to take an action after the data loads, use the $loaded() promise
            subCategories.$loaded().then(function() {
                console.log("loaded record:", subCategories.$id, subCategories.name);
                console.log(subCategories);
                // To iterate the key/value pairs of the object, use angular.forEach()
                // angular.forEach(subCategories, function(value, key) {
                //     console.log(key, value);
                // });
            });
            return subCategories;
        }
            
        function getImageUrl(image) {
            var url;
            var pathReference = firebaseDataService.images.child(image);
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
    }
})();
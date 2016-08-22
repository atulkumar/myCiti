'use strict'
var services = angular.module('myCiti.services');

(function() {
    services.factory('DefaultService', defaultService);
    defaultService.$inject = ['$firebaseArray', '$firebaseObject', 'firebaseDataService'];

    function defaultService($firebaseArray, $firebaseObject, firebaseDataService) {

        var service = {
            getBusinessList: getBusinessList,
            getBusinessDetails: getBusinessDetails
        };

        return service;

        function getBusinessList(subCategoryId, mainCategoryName) {
            var businessList = [];
            var list;

            if (angular.lowercase(mainCategoryName) == 'automobile')
                list = $firebaseArray(firebaseDataService.automobile_mapping.child('/' + subCategoryId));
            if (angular.lowercase(mainCategoryName) == 'beauty')
                list = $firebaseArray(firebaseDataService.beauty_mapping.child('/' + subCategoryId));
            list.$loaded().then(function() {
                angular.forEach(list, function(value, key) {
                    console.log('key -' + key);
                    console.log('value-' + value);
                    console.log('val is' + value.$id);
                    var r;
                    if (angular.lowercase(mainCategoryName) == 'automobile')
                        r = $firebaseObject(firebaseDataService.automobile.child('/' + value.$id));
                    if (angular.lowercase(mainCategoryName) == 'beauty')
                        r = $firebaseObject(firebaseDataService.beauty.child('/' + value.$id));
                    r.$loaded().then(function() {
                        businessList.push(r);
                    })
                });
            });
            return businessList;
        }

        function getBusinessDetails(businessId, subCategoryName) {
            console.log(subCategoryName);
            var business = $firebaseObject(firebaseDataService + '.' + subCategoryName + '.' + child('/' + businessId));
            return business;
        }
    }
})();
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
            else if (angular.lowercase(mainCategoryName) == 'beauty')
                list = $firebaseArray(firebaseDataService.beauty_mapping.child('/' + subCategoryId));
            else if (angular.lowercase(mainCategoryName) == 'wellness')
                list = $firebaseArray(firebaseDataService.health_mapping.child('/' + subCategoryId));
            list.$loaded().then(function() {
                angular.forEach(list, function(value, key) {
                    console.log('key -' + key);
                    console.log('value-' + value);
                    console.log('val is' + value.$id);
                    var r;
                    if (angular.lowercase(mainCategoryName) == 'automobile')
                        r = $firebaseObject(firebaseDataService.automobile.child('/' + value.$id));
                    else if (angular.lowercase(mainCategoryName) == 'beauty')
                        r = $firebaseObject(firebaseDataService.beauty.child('/' + value.$id));
                    else if (angular.lowercase(mainCategoryName) == 'wellness')
                        r = $firebaseObject(firebaseDataService.health.child('/' + value.$id));
                    r.$loaded().then(function() {
                        businessList.push(r);
                    })
                });
            });
            return businessList;
        }

        function getBusinessDetails(businessId, mainCategoryName) {
            var business;
            debugger;
            if (angular.lowercase(mainCategoryName) == 'automobile')
                business = $firebaseObject(firebaseDataService.automobile.child('/' + businessId));
            else if (angular.lowercase(mainCategoryName) == 'beauty')
                business = $firebaseObject(firebaseDataService.beauty.child('/' + businessId));
            else if (angular.lowercase(mainCategoryName) == 'wellness')
                business = $firebaseObject(firebaseDataService.health.child('/' + businessId));

            return business;
        }
    }
})();
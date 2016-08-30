'use strict';
var services = angular.module('myCiti.services');

(function() {
    services.factory('MerchantService', maerchantService);
    maerchantService.$inject = ['$firebaseArray', '$firebaseObject', 'firebaseDataService'];

    function maerchantService($firebaseArray, $firebaseObject, firebaseDataService) {

        var service = {
            getMerchants: getMerchants,
            getMerchantDetails:getMerchantDetails            
        };

        return service;

        function getMerchants() {
            var merchants = $firebaseArray(firebaseDataService.merchants.orderByChild("is-active").startAt(true));            
            return merchants;
        }

        function getMerchantDetails(merchantId) {
            var merchant = $firebaseObject(firebaseDataService.merchants.child('/'+ merchantId));            
            return merchant;
        }

    }    
})();

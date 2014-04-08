'use strict';

//Properties service used for articles REST endpoint
angular.module('mean.properties')
    .factory('Properties', ['$resource', function($resource) {
    return $resource('properties/:propertyId', {
        propertyId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]).factory('Tickets', ['$resource',
    function($resource){
    return $resource('properties/tickets/:propertyId', {
        propertyId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]).factory('PropertiesByUser', ['$resource', function($resource) {
    return $resource('properties/user/:userID', {
        userID: 'userID'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);
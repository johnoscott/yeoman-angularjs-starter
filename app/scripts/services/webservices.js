'use strict';

angular.module('starterApp')

    .factory('Customer', function ($resource) { return $resource('/api/customer', {},
        {'submit': {method: 'POST'}}
    )})


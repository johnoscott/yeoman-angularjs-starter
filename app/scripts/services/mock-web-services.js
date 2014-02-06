'use strict';

// app with fake backend (uncoment if you want to use it)

angular.module('webAppFakeBackend', ['starterApp','ngMockE2E'])
    .run(function ($httpBackend, $resource) {
    //        $httpBackend.whenPOST('/api/customer').respond($resource('/data/data.json').query());

        $httpBackend.whenPOST('/api/customer').respond(
            {
                "response": {ok:true}
            }
        );
        // pass-through requests
        $httpBackend.whenGET(/views\/.*/).passThrough();
        $httpBackend.whenGET(/.*/).passThrough(); // catch-all
        $httpBackend.whenPOST(/.*/).passThrough(); // pass through all POSTs

    });
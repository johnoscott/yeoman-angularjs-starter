'use strict';

angular.module('starterApp')
  .controller('MainCtrl', function ($scope, $log, $resource, $window, $http) {

        $log.info("MainCtrl init");

		$scope.ui = {
			panels: {
				nav : {show:false},
				search : {show:false},
				notification : {show:true},
				cart : {show:false}
			}
		}


  });

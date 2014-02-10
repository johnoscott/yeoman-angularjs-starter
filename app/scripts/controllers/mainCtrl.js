'use strict';

angular.module('starterApp')
  .controller('MainCtrl', function ($scope, $log, $resource, $window, $http, $alert, $modal) {

        $log.info("MainCtrl init");

		$scope.ui = {
			panels: {
				topNav : {show:true},
				sideNav : {show:true},
				search : {show:false},
				notification : {show:true},
				cart : {show:false}
			}
		}

		$scope.hideSideNav = function () {$scope.setSideNavVisibility(false)}
		$scope.showSideNav = function () {$scope.setSideNavVisibility(true)}
		$scope.setSideNavVisibility = function (show) {$scope.ui.panels.sideNav.show=show}

		$scope.ui.panels.topNav.dropDown1 = [
			{
				"text": "Another action",
				"href": "#anotherAction"
			},
			{
				"text": "Alert",
				"click": "testAlert()"
			},
			{
				"text": "Modal",
				"click": "testModal()"
			},
			{
				"divider": true
			},
			{
				"text": "Separated link",
				"href": "#separatedLink"
			}
		];

		$scope.testAlert = function() {
			$log.info("testAlert");
			var alert = $alert({title: 'Warning', content: 'I think you left the iron on.',
				placement: 'top', type: 'danger', show: true});
		}

		$scope.testModal = function() {
			$log.info("testModal");
			var alert = $modal({title: 'Warning', content: 'I think you left the iron on.',
				placement: 'top', animation: 'am-fade-and-scale', show: true});
		}





	});

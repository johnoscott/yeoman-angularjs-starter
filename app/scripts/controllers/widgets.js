'use strict';

angular.module('starterApp')
  .controller('WidgetsCtrl', function ($scope) {

		$scope.hideSideNav();

		$scope.modal = {
			"title": "Title",
			"content": "Hello Modal"
		};

		$scope.aside = {
			"title": "Title",
			"content": "Hello Aside"
		};

		$scope.alert = {
			"title": "Holy guacamole!",
			"content": "Best check yo self, you're not looking too good.",
			"type": "danger"
		};

		$scope.button = {
			"toggle": true,
			"checkbox": {
				"left": false,
				"middle": true,
				"right": false
			},
			"radio": 2
		}

		$scope.selectedIcon = ""; //"Globe";
		$scope.selectedIcons = []; // ["Globe","Heart","Camera"];
		$scope.icons = [{"value":"Gear","label":"<i class=\"fa fa-gear\"></i> Gear"},{"value":"Globe","label":"<i class=\"fa fa-globe\"></i> Globe"},{"value":"Heart","label":"<i class=\"fa fa-heart\"></i> Heart"},{"value":"Camera","label":"<i class=\"fa fa-camera\"></i> Camera"}];

		// Time Pickers
		$scope.selectedDate = "2014-02-07T01:32:42.849Z"; // <- [object Date]
		$scope.selectedDateAsNumber = 509414400000; // <- [object Number]
		$scope.fromDate = undefined; // <- [object Undefined]
		$scope.untilDate = undefined; // <- [object Undefined]

		// Date Pickers
		$scope.time = "1969-12-31T23:30:00.000Z"; // (formatted: 10:30 AM)
		$scope.selectedTimeAsNumber = 36000000; // (formatted: 9:00 PM)
		$scope.sharedDate = "2014-02-07T01:00:42.874Z"; // (formatted: 2/7/14 12:00 PM)

		// Tooltip
		$scope.tooltip = {
			"title": "Hello Tooltip - this is some content",
			"checked": true
		};

		// Popover
		$scope.popover = {
			"title": "Title",
			"content": "Hello Popover - This is a message!"
		};

		// Dropdown
		$scope.dropdown = [
			{
				"text": "Another action",
				"href": "#anotherAction"
			},
			{
				"text": "Something else here",
				"click": "$alert('working ngClick!')"
			},
			{
				"divider": true
			},
			{
				"text": "Separated link",
				"href": "#separatedLink"
			}
		];


	});

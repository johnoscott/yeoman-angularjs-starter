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

		// Type Ahead
		$scope.selectedState = "ala";
		$scope.states = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Dakota","North Carolina","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];

		// Tabs
		$scope.tabs = [
			{
				"title": "Home",
				"content": "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica."
			},
			{
				"title": "Profile",
				"content": "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee."
			},
			{
				"title": "About",
				"template": "templates/demo-tab.html",
				"content": "Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade."
			}
		];

	});

myapp.controller('mainController', ['$scope', function($scope) {
	$scope.title = "MetHotels";
	$scope.links = [
		{
			link : "O hotelu",
			path : "#oHotelu"
		},
		{
			link : "Rezervacije",
			path : "#rezervacije"
		},
		{
			link : "Kontakt",
			path : "#kontakt"
		},
		{
			link : "Registracija",
			path : "#registracija"
		},
		{
			link : "Ulogujte se",
			path : "#login"
		}
	];
}]);
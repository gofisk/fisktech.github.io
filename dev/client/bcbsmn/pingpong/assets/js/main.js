/*Run Functions on Page Load*/
window.onload = function() {
  date();
  time();
};

/*====================DATE AND TIME====================*/
function date () {
	var date = new Date();
	var output;
	date.setDate(date.getDate());
	output = ('0' + (date.getMonth()+1)).slice(-2) + '/' + ('0' + date.getDate()).slice(-2) + '/' + ('0' + date.getFullYear()).slice(-2);
	document.getElementById("date").innerHTML = output;
}

function time() {
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var label = hours >= 12 ? 'PM' : 'AM';
	hours = hours % 12;
	hours = hours ? hours : 12; //If the hour is 0, change it to 12
	minutes = minutes < 10 ? '0'+minutes : minutes;
	var strTime = ('0' + hours).slice(-2) + ':' + minutes + ' ' + label;
	document.getElementById("time").innerHTML = strTime;
}
setInterval(time, 1000); /*Update Time Every Second*/

/*================END DATE AND TIME====================*/

angular.module('bcbsmn_it_pp', ['firebase', 'ngTouch'])
    .controller('score', ['$scope', '$firebase', '$window', '$timeout', '$http', '$firebaseArray', '$firebaseObject', function($scope, $firebase, $window, $timeout, $http, $firebaseArray, $firebaseObject) {
        //BIND MATCH OBJECT FROM FIREBASE  
        var match = new Firebase("https://bcbsmn-ping-pong.firebaseio.com/match");
        var match = $firebaseObject(match);
        match.$bindTo($scope, "match");
        $scope.match = match;

	   $scope.newGame = function() {
            $scope.match = {
				
            };
        };
}]);
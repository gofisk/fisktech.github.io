angular.module('bcbsmn_it_pp', ['firebase', 'ngTouch'])
	.controller('score', ['$scope', '$firebase', '$window', '$timeout', '$http', '$firebaseArray', '$firebaseObject', function($scope, $firebase, $window, $timeout, $http, $firebaseArray, $firebaseObject) {
		//Sync data with Firebase in real time. This is freaking cool, just saying. 
		var match = new Firebase("https://bcbsmn-ping-pong.firebaseio.com/match");
        var match = $firebaseObject(match);
        match.$bindTo($scope, "match");
        $scope.match = match;
	   
	//Create a new game of ping-pong, or don't. The choice is yours, but not really.  
	$scope.newGame = function() {
		$scope.match = {
			gameStarted: false,
			footerMessage: "",
			serveCount: 0,
			serveMode: 0,
			highScore: 0,
			leader: "",
			players: [{
				name: "",
				serving: false,
				score: 0
			}, {
				name: "",
				serving: false,
				score: 0
			}]
		};
	};
		
	//Force the admin to enter player names before starting (My house, my rules).
	$scope.validateNames = function() {
		var x = document.getElementById("p1").value;
		var y = document.getElementById("p2").value;
		if (x == null || x == "" || y == null || y == "") {
			alert("Enter names for both players!");
			return false;
		} else {
			$scope.coinFlip();
			$scope.match.gameStarted = true;
		}
	}
		
	//According to the official rules, the flip of a coin determines who serves.
	//This is a wesbite, so we don't have a coin...but we do have random numbers!
	$scope.coinFlip = function() {
    var random = (Math.floor(Math.random() * 2) == 0);
		if (random == 0) {
			$scope.match.footerMessage = $scope.match.players[0].name + ", the serve is yours!"
			$scope.match.players[0].serving = true;
		} else if (random == 1) {
			$scope.match.footerMessage = $scope.match.players[1].name + ", the serve is yours!"
			$scope.match.players[1].serving = true;
		}
	}
	
	//This game is no fun without competition and you can't have that without scores
    $scope.addPoint = function(i) { 
        //Increment the Players Score
        $scope.match.players[i].score++;
		//This is important since the switch mode changes
        $scope.match.serveCount++;
		//This lets us know when to end the game
        $scope.match.highScore = Math.max($scope.match.players[0].score, $scope.match.players[1].score);
        
        // Echo who's in the lead or if it's tied
        if ($scope.match.players[0].score > $scope.match.players[1].score) {
            $scope.match.leader = $scope.match.players[0].name;
            $scope.match.footerMessage = $scope.match.leader + " is in the lead!";
        } else if ($scope.match.players[0].score < $scope.match.players[1].score) {
            $scope.match.leader = $scope.match.players[1].name;
            $scope.match.footerMessage = $scope.match.leader + " is in the lead!";
        } else if ($scope.match.players[0].score === $scope.match.players[1].score) {
          $scope.match.footerMessage = "Game is Tied!";
        }
        
		//If both players are tied at 10, the serve switches after every point
        if ($scope.match.players[0].score === 10 && $scope.match.players[1].score === 10) {
          $scope.match.serveMode = 1;
        }
        
        //The official rules state that players switch serving every two points, so let's do that
        if ($scope.match.serveCount === 2 && $scope.match.serveMode === 0) {
          $scope.match.players[0].serving = !$scope.match.players[0].serving;
          $scope.match.players[1].serving = !$scope.match.players[1].serving;
          $scope.match.serveCount = 0;
        
        //If the players are tied at 10 points, serving switches every to every other point
        } else if ($scope.match.serveMode === 1) {
          $scope.match.players[0].serving = !$scope.match.players[0].serving;
          $scope.match.players[1].serving = !$scope.match.players[1].serving;
        }
        
        //The official rules state that a player must win the game by two points and with a score of at least 11
        if (Math.abs($scope.match.players[0].score - $scope.match.players[1].score) >= 2 && ($scope.match.highScore >= 11)) {
			if($scope.match.players[0].score > $scope.match.players[1].score) {
				$scope.match.players[1].loser = true;
			} else if ($scope.match.players[1].score > $scope.match.players[0].score) {
				$scope.match.players[0].loser = true;
			}
			$(".scoreBoard").addClass("lockout");
			$scope.match.footerMessage = "Game Over! " + $scope.match.leader + " Wins!";
        }
    }
}]);

//VIDEO LIGHTBOX

$(document).ready(function() {
    
  // Fade in ligthbox and start video
  $("#button").on("click", function() {
    $("#lightbox").fadeIn(1000);
    //$(this).hide();
    var videoURL = $('#video').prop('src');
    videoURL += "?autoplay=1";
    $('#video').prop('src',videoURL);
  });
  
  // Fade out lightbox
  $("#close-btn").on("click", function() {
    $("#lightbox").fadeOut(500);
    $("#button").show(250);
  });
});
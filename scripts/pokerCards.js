var app = angular.module("PokerCardApp", []);
app.controller("PokerCardCtrl", function($scope){
	$scope.selectedCard = "None";
  $scope.participantName = "John Doe";
  $scope.pokerCards = ['?','0', '1/2', '1', '2', '3','5','8','13','21','40','80','100','coffee break'];
	$scope.updateSelected = function(card){
		$scope.selectedCard = card;
	}
});

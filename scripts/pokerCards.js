/* 
var app = angular.module('pokerApp', []);



function pokerController($scope) {
	$scope.count = 0;
}

app.directive("CreatePokerCards",function(){
	return {
		restrict: "E"
		template:
		
	}
}); */

//Poker Cards
var pokerCards = ['?','0', '1/2', '1', '2', '3','5','8','13','21','40','80','100','coffee break'];

function CreatePokerCards()
{
	for (var i = 0; i < pokerCards.length; i++) {
                       var btn = document.createElement("button");
                       var t = document.createTextNode(pokerCards[i]);
                       btn.appendChild(t);
					   btn.className = 'pokerCardButtons'
					   btn.value = pokerCards[i];
                       document.getElementById('pokerCards').appendChild(btn);
                    }
	
}



angular.module('userProfiles')
.controller('profileCtrl', function( $scope, userInfo ) {
	$scope.currentUser = userInfo.currentUser;
	$scope.friends = userInfo.friends;
});
//
// .controller('profileCtrl', function( $scope, friendService ) {
// 	var data = function(friendService) {
// 		return friendService.getFriends().then(function(response) {
// 			return response;
// 		});
// 	};
// 	$scope.currentUser = data.currentUser;
// 	$scope.friends = data.friends;
// });

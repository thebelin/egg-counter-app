angular.module('starter.controllers', [])
.controller('CounterCtrl', ['$scope', 'Counters', function ($scope, Counters) {

  // Make the counterfactory available on the page scope
  $scope.counters = Counters.list;
  $scope.getCounter = Counters.get;
  $scope.addCounter = Counters.add;

  // The add new form directives
  $scope.newCounterName = '';

  var _showNewCounterForm = false;
  $scope.showNewCounterForm = function() {
    return _showNewCounterForm;
  }
  $scope.toggleCounterForm = function () {
    _showNewCounterForm = !_showNewCounterForm;
  };
}])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

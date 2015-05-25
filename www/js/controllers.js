angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Demo) {
  $scope.chats = Demo.all();
  $scope.remove = function(chat) {
    Demo.remove(chat);
  }
})

.controller('CompanyCtrl', function($scope, Demo) {
  $scope.company = Demo.companies();
  $scope.agents = Demo.agents();
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

server_url = "https://mellanotes.herokuapp.com/";
// server_url = "http://localhost:3000/";


var myApp = angular.module('starter.controllers', ['starter.services', 'uiGmapgoogle-maps'])

myApp.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})


.controller('VisitsCtrl', function($scope, $http , $stateParams) {
  var companies = new Array();
  $http.jsonp(server_url + "customers/"+$stateParams.id+".json?callback=JSON_CALLBACK")
  .then(function(res){
    companies = res.data; 
    $scope.company = companies
    $scope.visits = $scope.company.visits
    console.log('VisitsCtrl:companies', $scope.company);
  });

  $scope.addNew = function() {
    window.location.href='#/app/visits/'+$stateParams.id+'/new';
  }
  $scope.id = $stateParams.id;
  $scope.data = {
    showReordering: false
  };
})

.controller('VisitCtrl', function($scope, $http , $stateParams) {

  var visits = new Array();
  $http.jsonp(server_url + "visits/"+ $stateParams.id + ".json?callback=JSON_CALLBACK")
  .then(function(res){
    visits = res.data; 
    $scope.visit = visits; 
    console.log('VisitCtrl:visit', $scope.visit);
  });

  $scope.data = {
    showReordering: false
  };

})

.controller('NewCtrl', function($scope, $http, $stateParams) {

  $scope.postData = {};

  $http.jsonp(server_url + "customers/"+$stateParams.id+".json?callback=JSON_CALLBACK")
  .then(function(res){
    $scope.company = res.data; 
    console.log('VisitsCtrl:company', $scope.company);
  });


  $http.jsonp(server_url + "visitors.json?callback=JSON_CALLBACK")
  .then(function(res){
    $scope.visitors = res.data; 
    console.log('VisitsCtrl:visitors', $scope.visitors);
    $scope.current_user = res.data[0];
    console.log('VisitsCtrl:current_user',$scope.current_user);
  });


  

  $scope.data = {
    showReordering: false
  };
  // Load the data
  $scope.expandTextOpp = function(){
    console.log(this.id);
    var element = document.getElementById("txtOpportunities");
    element.style.height =  element.scrollHeight + "px";
  }
  $scope.expandTextPai = function(){
    console.log(this.id);
    var element = document.getElementById("txtPain");
    element.style.height =  element.scrollHeight + "px";
  }
  $scope.expandTextAct = function(){
    console.log(this.id);
    var element = document.getElementById("txtAction");
    element.style.height =  element.scrollHeight + "px";
  }
  $scope.expandTextCom = function(){
    console.log(this.id);
    var element = document.getElementById("txtComment");
    element.style.height =  element.scrollHeight + "px";
  }

  // todo " + $scope.current_user.id+ "
  $scope.addVisit = function(){
  url_params = "?customer_id=" + $scope.company.id+ "&visitor_id=1&opp_txt=" + $scope.postData.opp_txt+ "&pain_txt=" + $scope.postData.pain_txt+ "&action_txt=" + $scope.postData.action_txt+ "&comm_txt=" + $scope.postData.comm_txt ;

 $http.jsonp(server_url + "createget.json"+url_params+"&callback=JSON_CALLBACK")
  .then(function(res){
    console.log(res.data);
    var seconds = new Date().getTime() / 1000;
    window.location.href='?'+seconds+'#/app/visits/'+$stateParams.id;
  });
  }


})


.controller('MapCtrl', function($scope, $ionicLoading, $location) {
  $scope.map = {
    center: {
      latitude: 32.6661,
      longitude: 35.1041
    },
    zoom: 16,
    bounds: {},
  };

  $scope.map.infoWindow = {
    show: true,
    coords: {
        latitude: 32.6666,
        longitude: 35.1041
    },
    id: 1,
    options: '',
    name: 'Elbit Systems'
  }
  $scope.map.infoWindow2 = {
      show: true,
      coords: {
          latitude: 32.6633,
           longitude: 35.1048,
      },
      id: 2,
      options: '',
      name: 'Given Imaging'
    }
    $scope.map.infoWindow3 = {
        show: true,
        coords: {
           latitude: 32.6628,
           longitude: 35.1048,
        },
        id: 2,
        options: ''
      }

    $scope.markers = [
      {
        latitude: 32.6661,
        longitude: 35.1041,
        id: 1,
        locat2: 'Elbit'
     },
      {
        latitude: 32.6628,
        longitude: 35.1048,
        locat2: 'Given Imaging',
        id: 2,
     },
      {
        latitude: 32.6648,
        longitude: 35.1038,
        id: 3,
        locat2: '',
        icon: '/img/blue-dot.png'
      },
    ];



    $scope.map.markers = $scope.markers;

})

myApp.controller('InfoController', function ($scope, $log, $location) {

      $scope.clickedButtonInWindow = function (param) {
        var id = param || $scope.$parent.model.id
        $location.path('/app/visits/'+id);
      }
});


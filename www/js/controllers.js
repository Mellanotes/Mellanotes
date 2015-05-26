server_url = "https://mellanotes.herokuapp.com/";
// server_url = "http://localhost:3000/";

angular.module('starter.controllers', ['starter.services'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
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
  
  $scope.addVisit = function(){
    console.log("submit here");

    var newContact = { visit : {
      company_id: $scope.company.id,
      visitor_id: $scope.current_user.id,
      opt_txt: $scope.postData.opt_txt,
      pain_txt: $scope.postData.pain_txt,
      action_txt: $scope.postData.action_txt,
      comm_txt: $scope.postData.comm_txt
    }
  };
  

  url_params = "?customer_id=" + $scope.company.id+ "&visitor_id=" + $scope.current_user.id+ "&opp_txt=" + $scope.postData.opp_txt+ "&pain_txt=" + $scope.postData.pain_txt+ "&action_txt=" + $scope.postData.action_txt+ "&comm_txt=" + $scope.postData.comm_txt ;

 $http.jsonp(server_url + "createget.json"+url_params+"&callback=JSON_CALLBACK")
  .then(function(res){
    console.log(res.data);
    window.location.href='#/app/visits/'+$stateParams.id;
  });
  }


})


.controller('MapCtrl', function($scope, $ionicLoading) {
  window.setTimeout(function(){
    var myLatlng = new google.maps.LatLng(32.6652, 35.1059);

    var mapOptions = {
      center: myLatlng,
      zoom: 16,
      disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions)


//        map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
var infoWindow = new google.maps.InfoWindow ({
  content: "&nbsp;&nbsp;&nbsp;&nbsp;<a href='/#/app/visits/1'>Elbit Systems</a>"
});
var client1 = new google.maps.Marker({
  position: new google.maps.LatLng(32.6661, 35.1041),
  map: map,
  title: "Elbit",
  infoWindow: infoWindow
});

google.maps.event.addListener(client1,'click',function(){
  infoWindow.open(map,client1)
})
google.maps.event.trigger(client1, 'click')

var infoWindow2 = new google.maps.InfoWindow ({
  content: "&nbsp;&nbsp;&nbsp;&nbsp;<a href='/#/app/visits/2'>Given Imaging</a>"
});
var client2 = new google.maps.Marker({
  position: new google.maps.LatLng(32.6628, 35.1048),
  map: map,
  title: "Given Imaging",
  infoWindow: infoWindow2
});
google.maps.event.addListener(client2,'click',function(){
 infoWindow2.open(map,client2)
})
google.maps.event.trigger(client2, 'click')

$scope.map = map;
});

});

